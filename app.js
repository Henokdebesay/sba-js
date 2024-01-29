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
  
    let assignmentInfo = ag.assignments.reduce((acc, info) => {
      acc[info.id] = {
        "due_date": info.due_at,
        "possible_points": info.points_possible
      };
      return acc;
    }, {});

    let result = [];

  for (let i = 0; i < learnersInfo.length; i++) {
    let learner = learnersInfo[i];
    if (learner.assignmentId === 3) continue;

    let totalScore = 0;
    let totalPossiblePoints = 0;

    for (let j = 0; j < learnersInfo.length; j++) {
      if (learnersInfo[j].learnerId === learner.learnerId) {
        let assignmentId = learnersInfo[j].assignmentId;
        let score = learnersInfo[j].score;
        let possiblePoints = assignmentInfo[assignmentId].possible_points;

        if (learner.assignmentId === assignmentId && learner.submitted_date > assignmentInfo[assignmentId].due_date) {
          score -= 10; // Subtract 10 points if assignment is late
        }

        totalScore += score;
        totalPossiblePoints += possiblePoints;
      }
    }
    
    let avg = totalScore / totalPossiblePoints;

    if (learner.assignmentId === 2 && learner.submitted_date > assignmentInfo[learner.assignmentId].due_date) {
      avg = (totalScore - 10) / totalPossiblePoints; // Adjust average for late submission
    }

    result.push({
      "id": learner.learnerId,
      "avg": avg.toFixed(2),
      "1": (learner.score / assignmentInfo[learner.assignmentId].possible_points).toFixed(2),
      "2": (learner.score / assignmentInfo[learner.assignmentId].possible_points).toFixed(2)

    });
  }
    
    return result;
  }
  
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);