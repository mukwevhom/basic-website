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