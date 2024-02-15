function showCompanyInfo(company) {
    document.getElementById(`${company}-info`).style.visibility = 'visible';
    document.getElementById(`${company}-info`).style.display = 'block';
}

function hideCompanyInfo(company) {
    document.getElementById(`${company}-info`).style.visibility = 'hidden';
    document.getElementById(`${company}-info`).style.display = 'none';
}

function hideAllCompanyInfo() {
    let companies = [
        'ptc',
        'lumenis',
        'elbit',
        'cronus',
        'asat'
    ]
    for (let company of companies) {
        document.getElementById(`${company}-info`).style.visibility = 'visible';
        document.getElementById(`${company}-info`).style.display = 'none';
    }
}