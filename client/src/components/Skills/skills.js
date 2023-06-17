export const getHref = (skill) => {
    switch(skill.toLowerCase()) {
    case 'angular': return "https://angular.io/tutorial"    
    
    case 'aws': return "https://www.aws.training/"

    case 'bootstrap': return "https://www.w3schools.com/bootstrap5/"
 
    case 'cplus': return "https://www.learncpp.com/"

    case 'css': return "https://web.dev/learn/css/"
    
    case 'express.js': return "https://www.codecademy.com/learn/learn-express"
    
    case 'github': return "https://git-scm.com/"
        
    case 'graphql': return "https://www.apollographql.com/tutorials/browse" 
        
    case 'html': return "https://www.w3schools.com/html/"
       
    case 'java': return "https://www.learnjavaonline.org/"
        
    case 'javascript': return "https://www.learn-js.org/"
       
    case 'mongodb': return "https://learn.mongodb.com/" 

    case 'mysql': return "https://www.mysqltutorial.org/"
        
    case 'node.js': return "https://nodejs.dev/en/learn/"
       
    case 'python': return "https://www.learn-php.org/" 

    case 'react': return "https://www.codecademy.com/learn/react-101"
    
    case 'rust': return "https://www.rust-lang.org/learn"
    
    case 'sql': return "https://www.w3schools.com/sql/" 

    case 'vue': return "https://www.aws.training/"
    
    case 'wordpress': return "https://wordpress.com/learn/"

    default: return "https://www.coursera.org/courses?query=programming%20languages"
    }
}

export const getLabel = (skill) => {
    switch(skill.toLowerCase()) {
    case 'angular': return "Angular"    
    
    case 'aws': return "AWS"

    case 'bootstrap': return "Bootstrap"
 
    case 'cplus': return "++"

    case 'css': return "CSS"
    
    case 'express.js': return "Express.js"
    
    case 'github': return "GitHub"
        
    case 'graphql': return "GraphQL" 
        
    case 'html': return "HTML"
       
    case 'java': return "Java"
        
    case 'javascript': return "JavaScript"
       
    case 'mongodb': return "MongoDB" 

    case 'mysql': return "MySQL"
        
    case 'node.js': return "Node"
       
    case 'python': return "Python" 

    case 'react': return "React"
    
    case 'rust': return "Rust"
    
    case 'sql': return "SQL/" 

    case 'vue': return "Vue"
    
    case 'wordpress': return "WordPress"

    default: return skill;
    }
}

export const getIcon = (skill) => {
    switch(skill.toLowerCase()) {
    case 'angular': return "angular"    
    
    case 'aws': return "aws"

    case 'bootstrap': return "bootstrap"
 
    case 'cplus': return "cuttlefish"

    case 'css': return "css3"
    
    case 'express.js': return ""
    
    case 'github': return "github"
        
    case 'graphql': return "connectdevelop" 
        
    case 'html': return "html5"
       
    case 'java': return "java"
        
    case 'javascript': return "js"
       
    case 'mongodb': return "envira" 

    case 'mysql': return "database"
        
    case 'node.js': return "node-js"
       
    case 'python': return "python" 

    case 'react': return "react"
    
    case 'rust': return "rust"
    
    case 'sql': return "database" 

    case 'vue': return "vuejs"
    
    case 'wordpress': return "wordpress"

    default: return ""
    }
}