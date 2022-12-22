
class CustomSelect {
    #id
    #option
    //Создаем закрытые классы
    constructor (id, option) {
        this.#id = id;
        this.#option = option;
    }
    //Рендер через который мы запускаем скрытые функции и создаем шаблон
    render(container) {
        // Создаем див в который будем помещать часть HTML через innerHTML
        const selectDropdown = document.createElement('div');
        selectDropdown.className = `select-dropdown select-dropdown--${this.#id}`
        // Добавляем верстку с нужным id
        selectDropdown.innerHTML = ` 
        <button class="select-dropdown__button select-dropdown__button--${this.#id}"> 
            <span class="select-dropdown__text select-dropdown__text--${this.#id}">Выберите элемент</span>
        </button>
        <ul class="select-dropdown__list select-dropdown__list--${this.#id}"> 
        </ul> `
        //Добавляем в ul выпадающий список
        const selectDropdownList = selectDropdown.querySelector(`.select-dropdown__list--${this.#id}`)
        this.#option.forEach(({value, text}) => {
            const listItem = document.createElement('li');
            listItem.className = 'select-dropdown__list-item';
            listItem.dataset.value = `${value}`
            listItem.textContent = `${text}`
            const selectDropdownList = selectDropdown.querySelector(`.select-dropdown__list--${this.#id}`)
            return selectDropdownList.append(listItem)
        })
        //Запускаем функцию обработчик клика по кнопке
        this.#clickDropdownButton(selectDropdown)
        ////Запускаем функцию обработчик клика по выпадающему списку
        this.#clickDropdownList(selectDropdownList)
        //Добавляем верстку в HTML
        return container.append(selectDropdown)
    }
    //Обработчик клика по кнопке
    #clickDropdownButton(select) {
        const dropdownButton = select.querySelector('.select-dropdown__button')
        dropdownButton.addEventListener('click', (event) => {
            const dropdownList = select.querySelector('.select-dropdown__list');
            if(dropdownList.classList[2] !== 'active'){
                dropdownList.classList.add('active')
            } else{
                dropdownList.classList.remove('active')
            }
            
        })
    }
    //Обработчик клика по выпадающему списку
    #clickDropdownList(selectList) {
        const selectedList = selectList.querySelector('.select-dropdown__list')
        selectList.addEventListener('click', (event) => {
            const {target} = event
            const isListItem = target.closest('.select-dropdown__list-item')
            const allListItem = selectList.querySelectorAll('.select-dropdown__list-item')
            allListItem.forEach((item) => {
                item.classList.remove('selected')
            })
            if(isListItem){
                const val = isListItem.dataset.value
                const [{text}] = this.#currentSelectedOption(val);
                const dropdownText =  document.querySelector('.select-dropdown__text')
                dropdownText.textContent = `${text}`
                isListItem.classList.add('selected')
                selectList.classList.remove('active')
                
            }
        })
    }
    #currentSelectedOption(val) {
        const filterArray = this.#option.filter(({value}) => {
             return value === Number(val);
        })
        return (filterArray)
    }

    get selectedValue () {
        return this.#currentSelectedOption
    }
}

const options = [
    { value: 1, text: 'JavaScript' },
    { value: 2, text: 'NodeJS' },
    { value: 3, text: 'ReactJS' },
    { value: 4, text: 'HTML' },
    { value: 5, text: 'CSS' }
];

const customSelect = new CustomSelect('564', options);
//console.log(customSelect)
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);


//Решение от школы 
/*
class CustomSelect {
    #options;
    #id;
    #selectButton;
    #select;
    #ulContainer;
    #currentSelectedOption;
  
    static #defaultText = {
      selectItems: "Выберите Элемент"
    };
  
    constructor(id, options = []) {
      this.#selectButton = document.createElement("button");
      this.#select = document.createElement("select");
      this.#ulContainer = document.createElement("ul");
      this.#select.id = id;
      this.#select.style.display = "none";
  
      this.#options = options;
      this.#id = id;
      this.#currentSelectedOption = null;
    }
  
    get selectedValue() {
      return this.#currentSelectedOption;
    }
  
    #renderVisibleSelect(container) {
      const containerId = `select-dropdown__list--${this.#id}`;
      this.#ulContainer.className = `select-dropdown__list ${containerId}`;
  
      this.#options.forEach((option) => {
        const liItem = document.createElement("li");
        liItem.className = "select-dropdown__list-item";
        liItem.dataset.value = option.value;
        liItem.textContent = option.text;
        liItem.addEventListener(
          "click",
          this.#handleDropdownItemSelect.bind(this)
        );
        this.#ulContainer.append(liItem);
      });
  
      if (container) {
        container.append(this.#ulContainer);
      }
    }
  
    #renderSelectButton(container) {
      this.#selectButton.className = `select-dropdown__button select-dropdown__button--${
        this.#id
      }`;
      const buttonTextItem = document.createElement("span");
      buttonTextItem.className = `select-dropdown__text select-dropdown__text--${
        this.#id
      }`;
      buttonTextItem.textContent = CustomSelect.#defaultText.selectItems;
      this.#selectButton.append(buttonTextItem);
      container.append(this.#selectButton);
  
      this.#selectButton.addEventListener(
        "click",
        this.#handleDropdownToggle.bind(this)
      );
    }
  
    #handleDropdownToggle() {
      this.#ulContainer.classList.toggle("active");
    }
  
    #handleDropdownItemSelect(event) {
      const { target } = event;
      const dataValue = target.getAttribute("data-value");
      const targetOption = this.#options.find(
        (option) => option.value === Number(dataValue)
      );
  
      const selectButtonText = this.#selectButton.querySelector(
        ".select-dropdown__text"
      );
      if (selectButtonText && dataValue && targetOption) {
        this.#currentSelectedOption = targetOption;
        const allLiOptions = this.#ulContainer.querySelectorAll(
          ".select-dropdown__list-item"
        );
        allLiOptions.forEach((liOption) => {
          liOption.classList.remove("selected");
        });
        target.classList.add("selected");
  
        selectButtonText.textContent = targetOption.text;
        this.#ulContainer.classList.remove("active");
      }
    }
  
    render(container) {
      const selectDropdownContainer = document.createElement("div");
      selectDropdownContainer.className = `select-dropdown select-dropdown--${
        this.#id
      }`;
      if (container) {
        this.#renderSelectButton(selectDropdownContainer);
        this.#renderVisibleSelect(selectDropdownContainer);
        container.append(selectDropdownContainer);
      }
    }
  }
  
  const options = [
    { value: 1, text: "JavaScript" },
    { value: 2, text: "NodeJS" },
    { value: 3, text: "ReactJS" },
    { value: 4, text: "HTML" },
    { value: 5, text: "CSS" }
  ];
  const customSelect = new CustomSelect("123", options);
  const mainContainer = document.querySelector("#container");
  customSelect.render(mainContainer); 
  */