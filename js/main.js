
var $projectCategorySelectors = $(".project-category-selector"),
    $projectTitleSelectors = $(".project-title-selector"),
    $projectTypesContainer = $("#project-types-container"),
    $selectedProjectInformationContainer = $("#selected-project-information-container"),
    $projectTitleList = $("#project-title-list")

// change category
$(document).on("click", ".project-category-selector", function() {
  $projectCategorySelectors = $(".project-category-selector")
  $projectTitleSelectors = $(".project-title-selector")
  $projectCategorySelectors.removeClass("selected-category")
  $(this).addClass("selected-category")
  var categoryTitle = $(this).html()
  click.play();
  buildProjectTitleListHmtl(categoryTitle)
})

// change project
$(document).on("click", ".project-title-selector", function() {
  $(".project-title-selector").removeClass("selected-title")
  console.log($projectTitleSelectors)
  $(this).addClass("selected-title")
  var projectTitle = $(this).html().trim()
  console.log(projectTitle)
  var selectedProject = projects.find(function(project) {
    return project["name"] === projectTitle
  })
  
  click.play();
  buildProjectInformationHtml(selectedProject)
})

var computerHum = new Audio("audio/computer-hum.wav")
computerHum.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

var computerTyping = new Audio("audio/typing.mp3")
var click = new Audio("audio/click.wav")


function buildSelecctorsProjectsHtml() {
  var $newProjectTitle = $("<li class='project-category-selector'>Video Maker</li>" )
}

function buildProjectCategoryHtml(name) {
  var $newProjectCategory = $(`<h4 class='project-category-selector'>${name}</h4>`)
  $projectTypesContainer.append($newProjectCategory)
}

function buildProjectCategoriesHtml(projectCategoriesArray) {
  for(var i = 0; i < projectCategoriesArray.length; i++) {
    buildProjectCategoryHtml(projectCategoriesArray[i])
  }
  
  $projectCategorySelectors = $(".project-category-selector")
  $projectTitleSelectors = $(".project-title-selector")
}

function buildProjectTitleListHmtl(category) {
  $projectTitleList.html("")
  var projectTitles = getProjectTitlesForCategory(category)
  for(var i = 0; i < projectTitles.length; i++ ) {
    $projectTitleList.append(`<li class='project-title-selector'> ${projectTitles[i]} </li>`)
  }
  $(".project-title-selector:first").click()
}

function getProjectTitlesForCategory(category) {
  // find all projects that are in the cateogry
  // and store the project titles
  var projectTitles =  projects.filter(function(project) {
    return project['category'] === category
  }).map(function(element) {
    return element["name"]
  });
  return projectTitles  
}


function buildProjectInformationHtml(project) {
  var htmlString = ""

  htmlString += `<h1>${project['name']}</h1>`
  
  if (project['image'] != "") {    
    htmlString += `<img class='preview-image' src='${project['image']}'>`
  }

  htmlString += `<p>${project['description']}</p>`

  if (project['skills'].length !== 0) {
    htmlString += `<div class='skills'> ${project['skills'].join(", ")} </div>`
  }

  if (project['githubUrl'] !== "") {
    htmlString += `<a href='${project['githubUrl']}' target='_blank' class="project-link">Github</a>`
  }

  if (project['secondUrl'].length !== 0) {
    htmlString += `<a href='${project['secondUrl'][0]}' target='_blank' class="project-link">${project['secondUrl'][1]}</a>`
  }

  
  $selectedProjectInformationContainer.html(htmlString)

}


computerHum.play();
computerTyping.play()


buildProjectCategoriesHtml(projectCategories)
$projectCategorySelectors[0].click()



