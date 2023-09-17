// Define the TemplateProcessor cla
"use strict";
function TemplateProcessor (template) {
  this.template = template
}

// Define the fillIn method for the TemplateProcessor class
TemplateProcessor.prototype.fillIn = function (dictionary) {
  // Use a regular expression to find all instances of {{property}} in the template
  const regex = /{{(.*?)}}/g

  // Replace each match with the corresponding property from the dictionary object or an empty string if not found
  return this.template.replace(regex, function (match, propertyName) {
    return dictionary[propertyName] || ''
  })
}

// Example 1: Property exists in dictionary
//const dateTemplate = new TemplateProcessor(template)

//const dictionary = { month: 'July', day: '1', year: '2016' }
//const str = dateTemplate.fillIn(dictionary)

//console.log(str) // Output: "My favorite month is July but not the day 1 or the year 2016"

// Example 2: Property doesn't exist in dictionary
//const dictionary2 = { day: '1', year: '2016' }
//const str2 = dateTemplate.fillIn(dictionary2)

//console.log(str2) // Output: "My favorite month is  but not the day 1 or the year 2016"
