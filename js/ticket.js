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
    let quantity = document.getElementById('quantity').value;

    let price = 200;
    let porcent = getDiscountByCategorie(categorieIndex);       
    let discount = (quantity * price) * porcent / 100;
    let amount = (quantity * price) - discount;

    let total = document.getElementById('total');
    total.innerHTML = amount;
};

const clearInput = () => {
    clearTotal();
    showAlert(false);

    document.getElementsByClassName('needs-validation')[0].classList.remove('was-validated');    

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
            document.getElementById('card-1').classList.remove('border-warning');
            document.getElementById('card-1').classList.add('border-primary');

            document.getElementById('card-2').classList.remove('border-warning');
            document.getElementById('card-2').classList.add('border-primary');

            document.getElementById('card-3').classList.remove('border-warning');
            document.getElementById('card-3').classList.add('border-primary');
            break;
        case 1:
            document.getElementById('card-1').classList.remove('border-primary');
            document.getElementById('card-1').classList.add('border-warning');

            document.getElementById('card-2').classList.add('border-primary')
            document.getElementById('card-2').classList.remove('border-warning');

            document.getElementById('card-3').classList.add('border-primary')
            document.getElementById('card-3').classList.remove('border-warning');
            break;
        case 2:
            document.getElementById('card-2').classList.remove('border-primary');
            document.getElementById('card-2').classList.add('border-warning');

            document.getElementById('card-1').classList.add('border-primary')
            document.getElementById('card-1').classList.remove('border-warning');

            document.getElementById('card-3').classList.add('border-primary')
            document.getElementById('card-3').classList.remove('border-warning');
            break;
        case 3:
            document.getElementById('card-3').classList.remove('border-primary');
            document.getElementById('card-3').classList.add('border-warning');

            document.getElementById('card-2').classList.add('border-primary')
            document.getElementById('card-2').classList.remove('border-warning');

            document.getElementById('card-1').classList.add('border-primary')
            document.getElementById('card-1').classList.remove('border-warning');
            break;
    }
};

const showAlert = (show) => {
    let alert = document.getElementsByClassName('alert-danger')[0];

    if(show) {
        alert.classList.remove('d-none');          
        alert.classList.remove('fade');
        alert.classList.add('show');
    } else {
        alert.classList.remove('show');
        alert.classList.add('fade');
        alert.classList.add('d-none');
    }
};

const form = document.getElementsByClassName('needs-validation')[0];
form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    showAlert(false);

    if(!this.checkValidity()) {   
        showAlert(true);
    } else {
        calculateOrder();
    }  

    form.classList.add('was-validated')    
    return false;    
})

const btnReset = document.getElementById('btnReset');
btnReset.addEventListener('click', clearInput);

const selectCategorie = document.getElementById('categories');
selectCategorie.addEventListener('change', changeCategorie);