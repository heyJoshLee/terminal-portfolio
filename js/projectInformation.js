var projects = [],
    projectCategories = ["Ruby Scripts", "Rails", "Javascript"]

function addProject(name, cat, des, git, url, skills, image) {
  projects.push({
    name: name,
    category: cat,
    description: des,
    githubUrl: git,
    secondUrl: url,
    skills: skills,
    image: image    
  })
}

addProject("Video Maker","Ruby Scripts", 
            "Automatically add intro and outtro cards to videos. Also makes social media image for each video.",
            "https://github.com/jleewebdev/social_video_maker", [], ["ruby"], "" )

addProject("PowerPoint Maker","Ruby Scripts", "Generate powerpoints from a Google Drive Sheet",
            "https://github.com/jleewebdev/powerpoint_maker", [], ["ruby", "Google Drive API"], "" )

addProject("YingwenXuexiao (English School)","Rails", "Online English learning website for Chinese speakers.",
            "https://github.com/jleewebdev/yingwenxuexiao", 
            ["yingwenxuexiao.com", "Offical Website"], 
            ["ruby", "rails", "bootstrap"], "images/yingwenxuexiao.png" )

addProject("Word Search", "Javascript", "Word Search Generator",
            "https://github.com/jleewebdev/javascript_word_search", 
            ["https://codepen.io/jleewebdev/full/ddEygN/", "CodePen"], 
            ["javascript", "jQuery"], "images/word-search.png")

addProject("MC Picker", "Javascript", "Generate multiple choices based on an answer bank",
            "https://github.com/jleewebdev/multipleChoicePicker", 
            [], 
            ["javascript", "jQuery"], "images/mc-picker.png")

addProject("Github profile viewer", "Javascript", "View Github profiles.",
            "https://github.com/jleewebdev/github_profile_viewer", 
            ["http://githubprofileviewer.herokuapp.com/", "Live Version"], 
            ["javascript", "react"], "images/github-profile-viewer.png")

addProject("Postit!", "Rails", "Reddit clone built with rails.",
            "https://github.com/jleewebdev/postit-jl", 
            ["https://postit-joshlee.herokuapp.com/", "Live Version"], 
            ["rails", "bootstrap"], "images/postit.png")

addProject("Postit", "Javascript", "Reddit clone built with express.js.",
            "https://github.com/jleewebdev/postit-jl", 
            ["https://post-it-javascript.herokuapp.com/", "Live Version"], 
            ["node", "express"], "images/postit-js.png")


addProject("Simon", "Javascript", "Play the classic game Simon.",
            "https://github.com/jleewebdev/simon_game", 
            ["https://codepen.io/jleewebdev/full/zqZGQE", "Codepen"], 
            ["javascript", "jquery"], "images/simon.png")

addProject("Link Shortener", "Javascript", "Generate short links.",
            "https://github.com/jleewebdev/link_shortener", 
            ["http://ls-jl.herokuapp.com/", "Live Version"], 
            ["javascript", "node"], "")

addProject("Pomodoro timer", "Javascript", "Pomodoro timer built with javascript.",
            "https://github.com/jleewebdev/pomodoro_timer", 
            ["https://codepen.io/jleewebdev/full/QNdgNd/", "Codepen"], 
            ["javascript"], "images/pomodoro-timer.png")

addProject("Deck", "Javascript", "Draw random cards from a deck.",
            "https://github.com/jleewebdev/Deck", 
            ["https://rawgit.com/jleewebdev/deck/master/index.html", "Live Version"], 
            ["javascript"], "images/deck.png")

addProject("Music Machine", "Javascript", "Create music loops.",
            "https://github.com/jleewebdev/musicalSquares", 
            ["https://htmlpreview.github.io/?https://github.com/jleewebdev/musicalSquares/blob/master/index.html", "Live Version"], 
            ["javascript"], "images/music-machine.png")

