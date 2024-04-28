let prevSelectedTag = ""
let experienceData = []

fetch("./data/index.json")
.then((a)=>a.json())
.then(data=>{
    const {project,experience} = data
    experienceData=experience
    renderProject(project);
    renderExperience(experience)
})
.catch((err)=>{
    console.log(err);
})


function renderProject(data) {


    let HTMLString = ``
    data.forEach(element => {
        let techUsed = ``
        element.techUsed.forEach((e)=>{
                techUsed += `<p class="mr-5 font-mono text-primary text-sm tracking-widest">${e}</p>`
        })
        
        HTMLString += `<div class="w-full bg-lightNavy shadow-md p-5 rounded-md">
        <div class="w-full flex justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-8 h-8 text-primary">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <a href="${element.url}" target="_blank">
                            <i class="fa-brands fa-github text-primary text-lg hover:-translate-y-1 hover:scale-110 delay-150 transition ease-in-out"></i>
                        </a>

                    </div>
        <p class="font-semibold text-lightSlate text-2xl mt-3">${element.title}
        </p>
        <p class="text-slate mt-3 ">${element.description}</p>
        <div class="flex flex-wrap mt-5">
           ${techUsed}

        </div>
    </div>`
    document.getElementById('projectContainer').innerHTML=HTMLString
    });
}

function renderExperience(data) {
    console.log(data);
    let tags = ``
    data.forEach((e,i)=>{
        tags+=`<p class="text-slate font-mono tracking-widest min:sm:border-l-2 max-sm:border-b-2 max-sm:text-center  p-2 pl-3 cursor-pointer" id="tag${i}" onclick="selectedTag('tag${i}')">${e.tag}</p>`
    })
    document.getElementById('tagContainer').innerHTML=tags
    selectedTag('tag0')
}

function selectedTag(data) {
    let tagElement = document.getElementById(data)
    tagElement.classList.add("bg-primary")
    tagElement.classList.add("bg-opacity-10")
    tagElement.classList.add("border-primary")
    console.log(data.split('tag')[1]);
    let sdata = experienceData[data.split('tag')[1]]
    console.log(sdata);
    document.getElementById("role").innerHTML=`${sdata.role} <span class="text-2xl max-sm:text-xl text-primary ml-3">@ ${sdata.company}</span>`
    // document.getElementById("company").innerText="@ "+sdata.company
    document.getElementById("duration").innerText=sdata.duration
    let summary = ``
    sdata.summary.forEach((e)=>[
        summary += ` <ul class="mt-4">
        <li class="text-primary before:content-['▹']">
            <span class="text-slate">${e}</span>
        </li>
    </ul>`
    ])
    document.getElementById('summary').innerHTML=summary




    if(prevSelectedTag != ""){
        let prevSelectedElement = document.getElementById(prevSelectedTag)
        prevSelectedElement.classList.remove("bg-primary")
        prevSelectedElement.classList.remove("bg-opacity-10")
        prevSelectedElement.classList.remove("border-primary")
    }
    prevSelectedTag = data
}

function navTo(data) {
    if(data == "about"){
        document.getElementById('about').scrollIntoView()
    }
    if(data == "experience"){
        document.getElementById('experience').scrollIntoView()
    }
    if(data == "project"){
        document.getElementById('project').scrollIntoView()
    }
    if(data == "contact"){
        document.getElementById('contact').scrollIntoView()
    }
}