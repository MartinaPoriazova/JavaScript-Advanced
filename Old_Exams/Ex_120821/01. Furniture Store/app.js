window.addEventListener('load', solve);

function solve() {
    const addBtnEl = document.getElementById('add');
    const modelInputEl = document.getElementById('model');
    const yearInputEl = document.getElementById('year');
    const descriptionInputEl = document.getElementById('description');
    const priceInputEl = document.getElementById('price');
    const furnitureEl = document.getElementById('furniture-list');

    addBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        let model = modelInputEl.value;
        let description = descriptionInputEl.value;
        let year = Number(yearInputEl.value);
        let price = Number(priceInputEl.value);
        
        if (!model || !description) {
            return;
        } 

        if (year <= 0 || price <= 0) {
            return;
        }

        let rowEl = document.createElement('tr');
        let modelCellEl = document.createElement('td');
        let priceCellEl = document.createElement('td');
        let actionCellEL = document.createElement('td');
        let infoButtonEl = document.createElement('button');
        let buyButtonEL = document.createElement('button');
        let contentsRowEl = document.createElement('tr');
        let yearContentEl = document.createElement('td');
        let descriptionContentEl = document.createElement('td');
        let totalPriceEl = document.querySelector('.total-price');

        modelCellEl.textContent = model;
        priceCellEl.textContent = price.toFixed(2);

        infoButtonEl.textContent = 'More info';
        infoButtonEl.classList.add('moreBtn');
        infoButtonEl.addEventListener('click', (e) => {
            if (e.currentTarget.textContent == 'More info') {
                contentsRowEl.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else {
                contentsRowEl.style.display = 'none';
                e.currentTarget.textContent = 'More info';
            }
        });

        buyButtonEL.textContent = "Buy it";
        buyButtonEL.classList.add('buyBtn');
        buyButtonEL.addEventListener('click', (e) => {
            let curretnTotalPrice = Number(totalPriceEl.textContent);   
            totalPriceEl.textContent = (curretnTotalPrice + price).toFixed(2);

            rowEl.remove();
            contentsRowEl.remove();
        });

        actionCellEL.appendChild(infoButtonEl);
        actionCellEL.appendChild(buyButtonEL);

        rowEl.classList.add('info');
        
        rowEl.appendChild(modelCellEl);
        rowEl.appendChild(priceCellEl);
        rowEl.appendChild(actionCellEL);

        yearContentEl.textContent = `Year: ${year}`;
        descriptionContentEl.setAttribute('colspan', 3);
        descriptionContentEl.textContent = `Description: ${description}`;

        contentsRowEl.classList.add('hide');
        contentsRowEl.style.display = 'none';

        contentsRowEl.appendChild(yearContentEl);
        contentsRowEl.appendChild(descriptionContentEl);

        furnitureEl.appendChild(rowEl);
        furnitureEl.appendChild(contentsRowEl);
    });
}
