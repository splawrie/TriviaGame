var panel = $('#quiz-area');

$(document).on('click', '#start', function(e){
  game.start();
});

$(document).on('click', '#done', function(e){
  game.done();
});

//question set

var questions = [
  {
  question: "In The Sword in the Stone, what does Merlin call the Greatest Force on Earth?",
  answers: ['Justice', 'Love', 'Revenge', 'Killer'],
  correctAnswer: "Love"
  }, 
  {
  question: "In Peter Pan, Captain Hook had a hook on which one of his hands?",
  answers: ['His Left', 'His Right', 'Neither Hand'],
  correctAnswer: "His Left"
  }, 
  {
  question: "What author wrote the book that the animated feature The Jungle Book is based on?",
  answers: ['Steven Spielburg', 'Dan Brown', 'Rudyard Kipling', 'Julia Roberts'],
  correctAnswer: "Rudyard Kipling"
  }, 
  {
  question: "Minnie Mouse had a bird that appeared in one cartoon along with Figaro from Pinocchio. What was the birds name?",
  answers: ['George', 'Teddy', 'Bob', 'Frankie'],
  correctAnswer: "Frankie"
  }, 
  {
  question: "Which full length animated feature did Walt Disney originally consider having as a Live Action Film with Mary Martin having the lead role?",
  answers: ['Aladdin', 'Peter Pan', 'Cinderella', 'Mickey Mouse'],
  correctAnswer: "Peter Pan"
  }, 
  {
  question: "After being on earth, where did Hercules first meet his father Zeus?",
  answers: ['The Temple of Athens', 'The Temple of Greece', 'The Temple of Olympia', 'In The Temple of Zeus'],
  correctAnswer: "In The Temple of Zeus"
  }, 
  {
  question: "What is the name of Donald Ducks sister (Also the mother of Huey Dewey & Louie)?",
  answers: ['Dumbella', 'Ella', 'Louise', 'Duckie'],
  correctAnswer: "Dumbella"
  }, 
  {
  question: "What was the first fairy tale that Walt Disney made a cartoon about?",
  answers: ['Hansel and Gretel', 'The Three Little Pigs', 'Little Red Ridding Hood', 'Snow White'],
  correctAnswer: "Little Red Ridding Hood"
  }, 
  {
  question: "In Hercules, Hades promised not to harm Megara provided that Hercules give up his strength. How long did he have to agree to give up his strength for?",
  answers: ['Twenty Four Hours', 'One Week', 'One Month', 'One Year'],
  correctAnswer: "Twenty Four Hours"
  }, 
  {
  question: "What is now considered the fastest ride in Walt Disney World?",
  answers: ["Summit Plummet", "Test Track", "Kali River Rapids", "The Twilight Zone Tower of Terror"],
  correctAnswer: "Test Track"
  }
  ];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function(){
    game.counter--;
    $('#count').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $('#secondWrapper').prepend('<h2>Time Remaining: <span id="count">120</span> Seconds</h2>');
    $('#start').remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }
    panel.append('<button id="done">Done</button>');
  },
  done: function(){

    $.each($("input[name='question-0']:checked"), function(){
       if ($(this).val() == questions[0].correctAnswer) {
        console.log(this);
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-1']:checked"), function(){
       if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });
    $.each($("input[name='question-2']:checked"), function(){
       if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-3']:checked"), function(){
       if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-4']:checked"), function(){
       if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-5']:checked"), function(){
       if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-6']:checked"), function(){
       if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-7']:checked"), function(){
       if ($(this).val() == questions[7].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-8']:checked"), function(){
       if ($(this).val() == questions[8].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    $.each($("input[name='question-9']:checked"), function(){
       if ($(this).val() == questions[9].correctAnswer) {
          game.correct++;
      } else {
        game.incorrect++;
      }

    });

    this.results();
  },


    results:function(){
      clearInterval(timer);

      $('#secondWrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');

    }


  };
