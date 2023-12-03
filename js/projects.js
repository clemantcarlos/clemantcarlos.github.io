const PROJECTS=[
  {
    title:'JS API practice',
    img:'../img/js-api-practice.png',
    desc:'My first atattempt at fetching data',

  }
]

export function generateProjects(){
 const html =  PROJECTS.map(project=>{
  return `
    <div class='project-card'>
      <h2>${project.title}<h2>
      <img src="${project.img}">
      <p>${project.desc}</p>
    </div>
  `
 }).join("")

$('#projects').innerHTML=html

  console.log('a');
}