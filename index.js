const goto = (txt)=>{
    window.location.href=`#${txt}`
}


const instagram=()=>{
    window.open("https://www.instagram.com/nimish.gj/","_blank")
}

const github=()=>{
    window.open("https://github.com/nimishgj","_blank")
}

const linkedin=()=>{
    window.open("https://www.linkedin.com/in/nimishgj","_blank")
}

const twitter=()=>{
    window.open("https://twitter.com/g_nimish","_blank")
}


sendData=(e)=>{
    e.preventDefault();
    var param={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value
    };
    const serviceID='service_lfmcrc4'
const templateID='template_rjr8u2h'

emailjs.send(serviceID,templateID,param)
.then(
    res=>{
        alert('message sent')
    }
)

}

