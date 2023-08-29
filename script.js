let tablinks=document.getElementsByClassName("tab-links");
        let tabcontents=document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        let sideMenu=document.getElementById("sideMenu");
        function openMenu(){
            sideMenu.style.right = "0";
        }
        function closeMenu(){
            sideMenu.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycby8IuyWvyOj0KDgF8NMtX-Prbk6eBNLQC_UdQaqafm_F1zTVX4BaHxwUtv5uZGxwVqu/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg=document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML="Your Message Sent Successfully"
            setTimeout(function(){
                msg.innerHTML=""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })