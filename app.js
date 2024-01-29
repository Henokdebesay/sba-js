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
    let learnersInfo = submissions.map((submission) => {
      return {
        "learnerId": submission.learner_id,
        "assignmentId": submission.assignment_id,
        "submitted_date": submission.submission.submitted_at,
        "score": submission.submission.score
      };
    });

    console.log(learnersInfo);
  
    let assignmentInfo = ag.assignments.map((info) => {
      return {
        "assignmentId": info.id,
        "due_date": info.due_at,
        "possible_points": info.points_possible
      };
    });

    console.log(assignmentInfo);

  
    let inputArray = [];
  
    for (let i = 0; i < learnersInfo.length; i++) {
      for (let j = 0; j < assignmentInfo.length; j++) {
        if (learnersInfo[i].assignmentId === assignmentInfo[j].assignmentId) {
          inputArray.push({
            "id": learnersInfo[i].learnerId,
            "avg": ((learnersInfo[i].score + learnersInfo[i].score) / (assignmentInfo[0].possible_points + assignmentInfo[1].possible_points)),
            "1": learnersInfo[i].score / assignmentInfo[0].possible_points,
            "2" : learnersInfo[i].score / assignmentInfo[1].possible_points
          });
        }
      }
    }



    
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
  