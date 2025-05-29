"require strict";

exports.home = (req, res) => {
  res.render("index", { message: "Welcome to Express Templates!" });
};

exports.respondWithName = (req, res) => {
  const userName = req.params.myName; // Get the parameter from the URL
  res.render("index", { name: userName }); // Pass it to the view
};
