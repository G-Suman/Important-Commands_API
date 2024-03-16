function jsonMethods(jsonforString) {
    console.log("Original JSON String:", jsonforString);
  
    // Parsing JSON string to JavaScript object
    let parsedabObject = JSON.parse(jsonforString);
    console.log("After JSON.parse():", parsedabObject);
  
    // Stringifying JavaScript object to JSON string
    let jsonsStringified = JSON.stringify(parsedabObject);
    console.log("After JSON.stringify():", jsonsStringified);
  }
  
  // Example Usage for JSON Methods
  const sampleJSONString =
    '{"key": "value", "number": 30, "nested": {"nestedKey": "nestedValue"}}';
  
  jsonMethods(sampleJSONString);