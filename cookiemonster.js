var cookieMonster = { "name" : "Fred",
                      "hair" : "blue",
                      "favorite_foods" : ["cookies"],
                      "good_foods": ["pizza", "skittles"],
                      "bad_foods" : ["water", "banana"],
                      "hated_foods" : ["spinach"],
};
cookieMonster.eat = function(food){
  var score = 0;
  for (var i = 0; i < cookieMonster.favorite_foods.length; i++){
    if (food === cookieMonster.favorite_foods[i]) {
      score += 2;
    } // loop over good foods and add the result to score
    for (var j = 0; j < cookieMonster.good_foods.length; j++){
      if(food === cookieMonster.good_foods[j]){
        score ++;
         } for (var k = 0; k < cookieMonster.bad_foods.length; k++){
        if (food === cookieMonster.bad_foods[k]){
          score --;
        } for (var l = 0; l < cookieMonster.hated_foods.length; l++){
          if (food === cookieMonster.hated_foods[l]){
            score -= 2;
          }
        }
      }
    }
  }
  return score;
};
