let aboutSection = document.createElement("section")
let introSection = document.querySelector(".intro-section")

aboutSection.setAttribute("class", "about-section")

let aboutSectionHTML = `<div class="container">
    <div class="w-50">
        <h2>A little about me</h2>
        <p>Thanks for stopping by. For the past 6 years, I've excelled in customer success teams at some of Australia's top hotels. Recently, I joined the customer success team at Square, where I'm proud to be part of a team building a more inclusive economy for small businesses in Australia.</p>
        <p>I have an unwavering passion and energy for people, which has proven a valuable asset in my career. I believe the best customer experiences come from genuine empathy, while always maintaining a friendly, positive and energetic character.</p>
    </div>
</div>`

aboutSection.innerHTML = aboutSectionHTML

introSection.after(aboutSection)

document.querySelector(".footer-year").textContent = new Date().getFullYear()

// List Work History
const workHistoryArr = [
    {
        "image": "pexels-olly-846741.jpg",
        "period": "August 2021 - Current",
        "company": "Square",
        "about": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque assumenda, quis quae corporis aut est ducimus in commodi soluta dolore nam ipsam mollitia accusantium similique, dolorem ipsum quos architecto?"
    },
    {
        "image": "pexels-seven11nash-380769.jpg",
        "period": "March 2021 - August 2021",
        "company": "Hilton Melbourne Little Queen Street",
        "about": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque assumenda, quis quae corporis aut est ducimus in commodi soluta dolore nam ipsam mollitia accusantium similique, dolorem ipsum quos architecto?"
    },
    {
        "image": "pexels-seven11nash-380769.jpg",
        "period": "February 2018 - March 2021",
        "company": "West Hotel Sydney, Curio Collection by Hilton",
        "about": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque assumenda, quis quae corporis aut est ducimus in commodi soluta dolore nam ipsam mollitia accusantium similique, dolorem ipsum quos architecto?"
    }
]

let workHistoryContEl = document.querySelector(".work-history-section .container")

workHistoryArr.forEach(item => {
    let workHTML = `<div class="row align-items-start py-5">
        <div class="col">
            <img src="${item.image}" alt="Photo by Marc Mueller: https://www.pexels.com/photo/man-sitting-in-front-of-computer-380769/" class="w-100" >
        </div>
        <div class="col">
            <div class="work-info">
                <p>${item.period}</p>
                <h3>${item.company}</h3>
                <p>${item.about}</p>
            </div>
        </div>
    </div>`

    let tempWorkDivEl = document.createElement("div")
    
    tempWorkDivEl.innerHTML = workHTML

    workHistoryContEl.append(tempWorkDivEl)
})
