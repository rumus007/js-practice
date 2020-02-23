//execution part

const a = require("./fileSystem");

// json data
var jsonData =
  '{"persons":[{"name":"John","city":"New York"},{"name":"Phil","city":"Ohio"}]}';

// parse json
var jsonObj = JSON.parse(jsonData);

// stringify JSON Object
var jsonContent = JSON.stringify(jsonObj);
// console.log(jsonContent);

a.create(jsonContent, "test.json")
  .then(function(data) {
    console.log("file written successfully.", data);
    return a.read("test.json");
  })
  .then(function(data) {
    console.log("the data is :", JSON.parse(data));
    let tmp = JSON.parse(data);
    let persons = tmp.persons;
    persons.push({ name: "Rumus", city: "KTM" });
    var jsonContent = JSON.stringify(tmp);
    return a.create(jsonContent, "test.json");
  })
  .then(function(data) {
    console.log("file updated successfully", data);
  })
  .catch(function(error) {
    console.log("the error is :", error);
  });
