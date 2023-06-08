const getCategorieId = (index) => {
    return index + 1;
};

const getDiscountByCategorie = (categorie) => {
    let porcent = 0;
    
    switch (categorie) {
        case 1:
            porcent = 80;
            break;
        case 2:
            porcent = 50;
            break;
        case 3:
            porcent = 15;
            break;
    }

    return porcent;
};

const calculateOrder = () => {
    clearTotal();
    let categorieIndex = document.getElementById('categories').options.selectedIndex;
    let categorieId = getCategorieId(categorieIndex);
    let quantity = document.getElementById('quantity').value;

    if(quantity === undefined || isNaN(parseInt(quantity))) {
        alert('Cantidad no es valida');
    } else {
        let price = 200;
        let porcent = getDiscountByCategorie(categorieId);       
        let discount = (quantity * price) * porcent / 100;
        let amount = (quantity * price) - discount;

        let total = document.getElementById('total');
        total.innerHTML = amount;
    }
};

const clearInput = () => {
    clearTotal();

    let inputs = document.getElementsByClassName('form-control');
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
    
};

const clearTotal = () => {
    document.getElementById('total').innerHTML = '0';
}

const changeCategorie = () => {
    clearTotal();
    let option = document.getElementById('categories').options.selectedIndex;

    switch (option) {
        case 0:
            document.getElementById('card-0').classList.remove('border-primary');
            document.getElementById('card-0').classList.add('border-warning');

            document.getElementById('card-1').classList.add('border-primary')
            document.getElementById('card-1').classList.remove('border-warning');

            document.getElementById('card-2').classList.add('border-primary')
            document.getElementById('card-2').classList.remove('border-warning');
            break;
        case 1:
            document.getElementById('card-1').classList.remove('border-primary');
            document.getElementById('card-1').classList.add('border-warning');

            document.getElementById('card-0').classList.add('border-primary')
            document.getElementById('card-0').classList.remove('border-warning');

            document.getElementById('card-2').classList.add('border-primary')
            document.getElementById('card-2').classList.remove('border-warning');
            break;
        case 2:
            document.getElementById('card-2').classList.remove('border-primary');
            document.getElementById('card-2').classList.add('border-warning');

            document.getElementById('card-1').classList.add('border-primary')
            document.getElementById('card-1').classList.remove('border-warning');

            document.getElementById('card-0').classList.add('border-primary')
            document.getElementById('card-0').classList.remove('border-warning');
            break;
    }
};

const btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', calculateOrder);

const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', clearInput);

const selectCategorie = document.getElementById('categories');
selectCategorie.addEventListener('change', changeCategorie);