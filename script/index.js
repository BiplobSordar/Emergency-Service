


const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById("close-btn")
const callHistory = document.getElementById("call-history")
const cardContainer = document.getElementById('card-containerd')
const heartCount = document.getElementById('heart-count')
const coinCount = document.getElementById('coinCount')
const copyCount = document.getElementById('copy-count')
const customAlertBtn = document.getElementById('customAlertBtn')
const customAlert = document.getElementById('customAlert')
const buttons = document.querySelectorAll('.copy-btn')




let services = [
  { serviceIcon: '../assets/emergency.png', serviceNameBangla: 'জাতীয় জরুরি সেবা', serviceNameEnglish: 'National Emergency', serviceType: 'সার্বজনীন', serviceNumber: '999' },
  { serviceIcon: '../assets/police.png', serviceNameBangla: 'পুলিশ', serviceNameEnglish: 'Police', serviceType: 'পুলিশ', serviceNumber: '999' },
  { serviceIcon: '../assets/fire-service.png', serviceNameBangla: 'ফায়ার সার্ভিস', serviceNameEnglish: 'Fire Service', serviceType: 'ফায়ার', serviceNumber: '999' },
  { serviceIcon: '../assets/ambulance.png', serviceNameBangla: 'অ্যাম্বুলেন্স', serviceNameEnglish: 'Ambulance', serviceType: 'স্বাস্থ্য', serviceNumber: '1994-999999' },
  { serviceIcon: '../assets/emergency.png', serviceNameBangla: 'নারী ও শিশু সহায়তাস', serviceNameEnglish: 'Women & Child Helpline', serviceType: 'সহায়তা', serviceNumber: '109' },
  { serviceIcon: '../assets/emergency.png', serviceNameBangla: 'দুদক', serviceNameEnglish: 'Anti-Corruption', serviceType: 'সরকারি', serviceNumber: '106' },
  { serviceIcon: '../assets/electricity.png', serviceNameBangla: 'বিদ্যুৎ বিভ্রাট', serviceNameEnglish: 'Electricity Outage', serviceType: 'বিদ্যুৎ', serviceNumber: '16216' },
  { serviceIcon: '../assets/brac.png', serviceNameBangla: '্র্যাক', serviceNameEnglish: 'Brac', serviceType: 'এনজিও', serviceNumber: '16445' },
  { serviceIcon: '../assets/railway.png', serviceNameBangla: 'বাংলাদেশ রেলওয়ে', serviceNameEnglish: 'Bangladesh Railway', serviceType: 'পরিবহন', serviceNumber: '163' },
]



menuBtn.addEventListener("click", () => {
  callHistory.classList.remove("translate-x-full")
});

closeBtn.addEventListener("click", () => {
  callHistory.classList.add("translate-x-full")
});





function initCard() {



  for (let i = 0; i < services.length; i++) {
    let cardBody = document.createElement('div')

    cardBody.className = "card bg-white rounded-xl min-h-[360px] shadow-lg p-6 flex flex-col justify-between  hover:scale-105 transform transition";
    cardBody.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="w-15 h-15 bg-red-200 flex justify-center items-center rounded-2xl">
        <img src="${services[i].serviceIcon}" alt="Emergency Image"
          class="w-[80%] h-[80%] object-cover rounded-full border-2 border-white">
      </div>
      <i id="heart" class="fa-regular fa-heart  hover:cursor-pointer heart text-2xl text-gray-700"></i>
    </div>

    <div class="mt-4 text-start">
      <h2 class="text-xl font-bold mb-3">${services[i].serviceNameBangla}</h2>
      <p class="text-[17px] font-semibold text-gray-500 mb-3">${services[i].serviceNameEnglish}</p>
      <h1 class="text-4xl font-bold mt-3">${services[i].serviceNumber}</h1>
      <span class="bg-gray-300 min-w-[100px] text-center font-semibold text-gray-500 p-3 rounded-full text-xs mt-5 inline-block">${services[i].serviceType}</span>
    </div>

    <div class="mt-5 flex justify-center gap-3">
      <button
        class="flex copy-btn items-center hover:cursor-pointer justify-center border-1 border-gray-300 gap-2 bg-white text-gray-700 w-1/2 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition">
        <i class="fa-regular  fa-copy "></i> Copy
      </button>
      <button
        class="flex items-center hover:cursor-pointer call-btn justify-center gap-2 bg-green-500 text-white w-1/2 px-4 py-2 rounded-lg shadow">
        <i class="fa-solid hover:cursor-pointer  fa-phone"></i> Call
      </button>
    </div>
  `;

    cardContainer.appendChild(cardBody)

  }

}


initCard()




document.getElementById('clearCallHistory').addEventListener('click',()=>{
  document.querySelector('.call-history').innerHTML=''
})

function addCallHistory(serviceName, serviceNumber) {

  let history = document.createElement('div')
  history.className = 'bg-[#FAFAFA] w-full max-h-[86px] mb-2 p-4 flex justify-between items-center'

  const now = new Date()

  const time = now.toLocaleTimeString('en-US', { hour12: true })

  history.innerHTML = `<div>
                <h2 class="text-[14px]">${serviceName}</h2>
                <p class="text-[16px] text-gray-400">${serviceNumber}</p>
              </div>
              <h5 class="text-[16px] text-gray-700">${time}</h5>`

  document.querySelector('.call-history ').appendChild(history)



}


function showCustomAlert(icon, name, type, message) {
  document.getElementById("serviceIcon").src = icon;
  document.getElementById("serviceName").innerText = message + ' ' + name;
  document.getElementById("serviceNumber").innerText = type;
  document.getElementById("customAlert").classList.remove("hidden");
}

customAlertBtn.addEventListener("click", () => {
  customAlert.classList.add("hidden");
});






cardContainer.addEventListener('click', (e) => {

  if (e.target.closest('.heart')) {
    heartCount.innerText = Number(heartCount.innerText) + 1
  }


  if (e.target.closest('.copy-btn')) {
    let cardDetail = e.target.closest('.card')

    let serviceNameBangla = cardDetail.querySelector('h2').innerText

    let icon = cardDetail.querySelector('img').src

 

    let serviceNumber = cardDetail.querySelector('h1').innerText
   
    navigator.clipboard.writeText(serviceNumber)

    copyCount.innerText = Number(copyCount.innerText) + 1

    showCustomAlert(icon, serviceNameBangla, serviceNumber, 'Copied ')

  }


  if (e.target.closest('.call-btn')) {

    if (Number(coinCount.innerText) > 19) {
      let cardDetail = e.target.closest('.card')

      let serviceNameBangla = cardDetail.querySelector('h2').innerText

      let icon = cardDetail.querySelector('img').src

     

      let serviceNumber = cardDetail.querySelector('h1').innerText

      coinCount.innerText = Number(coinCount.innerText) - 20
     
      showCustomAlert(icon, serviceNameBangla, serviceNumber, 'Calling To')
      
      addCallHistory(serviceNameBangla, serviceNumber)


    } else {
      showCustomAlert('../assets/error.png', "Balance", coinCount.innerText, 'You cannot make a call because your')
    }


  }
})




















