const qrtext=document.getElementById('qr-text');
const sizes=document.getElementById('sizes');
const generatebtn=document.getElementById('generatebtn');
const downloadbtn=document.getElementById('downloadbtn');
const qrContainer=document.querySelector('.qr-body');

let size=sizes.value;

generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyinput();
});

sizes.addEventListener('change',(e)=>{
    size=e.target.value;
     isEmptyinput();
})

downloadbtn.addEventListener('click', (e)=>{
    let img=document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
            downloadbtn.setAttribute('href', imgAtrr);
    }else{
        downloadbtn.setAttribute("href",`$(document.querySelector('canvas').toDataURL())`);
    }
});

function isEmptyinput(){

    if(qrtext.value.length>0){
    generateQRCode();
}else{
    alert("Please enter the text or URL to generate");
}

}

function generateQRCode(){
 qrContainer.innerHTML="";
new QRCode(qrContainer,{
    text:qrtext.value,
    height:size,
    width:size,
    colorLight:"#fff",
    colorDark:"#000",
})
}
