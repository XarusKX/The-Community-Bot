'use strict';
module.exports = (sequelize, DataTypes) => {
  var CompetitiveProgrammingProblem = sequelize.define('competitive_programming_problem', {
    title: DataTypes.STRING,
    source_url: DataTypes.STRING,
    detail: DataTypes.TEXT,
    input_detail: DataTypes.TEXT,
    output_detail: DataTypes.TEXT,
    input_sample: DataTypes.TEXT,
    output_sample: DataTypes.TEXT,
    note: DataTypes.TEXT
  }, {});
  CompetitiveProgrammingProblem.associate = function(models) {
    // associations can be defined here
  };
  return CompetitiveProgrammingProblem;
};
