const PROJECTS=[
  {
    img:'../img/js-api-practice.png',
    desc:'My first attempt at fetching data with html, scss and jquery ',
    url:'https://clemantcarlos.github.io/js-api-practice/'
  }
]

export function generateProjects(){
 const html =  PROJECTS.map(project=>{
  return `
    <div class='project-card'>
      <div class="card">
        <div class="face face1" style="background-image:url('${project.img}');background-repeat:no-repeat;background-size:cover"></div>
        <div class="face face2">
          <div class="content">
            <h3>
              <a href="${project.url}" target="_blank">Go and see it!</a>
            </h3>
            <p>${project.desc}</p>
          </div>
        </div>
      </div>
    </div>
  `
 }).join("")
  $('#projects').html(html)
}