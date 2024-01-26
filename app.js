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
    // let learners = submissions.map((submission) => {
    //   return {
    //     learnerId : submission.learner_id,
    //     assignmentId : submission.assignment_id
    //   }
    // });
    let result = [];
    // console.log(result);
    // console.log(learners);
    submissions.forEach(submission => {
      const { learner_id, assignment_id } = submission;
      const pointsPossible = ag.assignments.find(assignment => assignment.id === assignment_id).points_possible;

      // console.log(learner_id);

      // console.log(assignment_id);

      // console.log(pointsPossible);
  
      // Initialize or get existing learner entry
      if (!result[learner_id]) {
        result[learner_id] = { id: learner_id, avg: 0 };
      }

  
      // Update average score and individual assignment score
      result[learner_id].avg += submission.submission.score;
      result[learner_id][assignment_id] = submission.submission.score / pointsPossible;
    });
   
    // Finalize average scores
    Object.values(result).forEach(learnerEntry => {
      const totalPointsPossible = ag.assignments.reduce((total, assignment) => total + assignment.points_possible, 0);
      learnerEntry.avg /= totalPointsPossible;
    });


    // result.forEach(key => {
    //   if (keyassignment_id === '3'){
    //     delete (key[0].assignment_id) ;
    //   }
    // })
  
    return Object.values(result);
    }
  
  
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
console.log(result);