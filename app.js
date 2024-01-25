// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  
  function getLearnerData(course, ag, submissions) {
    // here, we would process this data to achieve the desired result.
  
    let result = submissions.map(key => {

      let firstAssignment = 0;
      let secondAssignment = 0;


        return {
            "id": key.learner_id,
            "Avg": key.submission.score,
            firstAssignment :  key.submission.score/ 50,
            secondAssignment :  key.submission.score /50,
            "Assignment" : key.assignment_id
        }
    
    })

    //  let course_assignments = ag.assignments.map(points  => {return points})

    //           console.log(course_assignments);

    //   let possible_points = AssignmentGroup.assignments.map(points  => ({points_possible: points.points_possible}))
    //          console.log(possible_points);


        




    // const result = [
    //   {
    //     id: 125,
    //     avg: 0.985, // (47 + 150) / (50 + 150)
    //     1: 0.94, // 47 / 50
    //     2: 1.0 // 150 / 150
    //   },
    //   {
    //     id: 132,
    //     avg: 0.82, // (39 + 125) / (50 + 150)
    //     1: 0.78, // 39 / 50
    //     2: 0.833 // late: (140 - 15) / 150
    //   }
    // ];
  
    return result;
  }
  
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
console.log(result);
  


// // let learnersIdScore = LearnerSubmissions.map(id => ({learner_id: id.learner_id , submission_score: id.submission.score}));
// //   console.log(learnersIdScore);

// //   let possible_points = AssignmentGroup.assignments.map(points  => ({points_possible: points.points_possible}))
// //   console.log(possible_points);


// //   let submission_score = LearnerSubmissions.map(id => ({submission_score: id.submission.score}));
// //   console.log(submission_score);


// let result = LearnerSubmissions.map(key => {


//     return { "id": key.learner_id,
//              "avg": key.submission.score,
//             "assigment_id": key.assignment_id
//     }

//     })

    
    
//         console.log(result);

// //     id: 125,
// //     avg: 0.985, // (47 + 150) / (50 + 150)
// //     1: 0.94, // 47 / 50
// //     2: 1.0 // 150 / 150
// //   },



// let possible_points = AssignmentGroup.assignments.map(points  => ({points_possible: points.points_possible}))
    
// console.log(possible_points);