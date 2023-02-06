// While loop answer 
function bottleSong() {
  let bottles = 9
  while (bottles > 1){
    console.log(`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.
      Take one down and pass it around, ${bottles-1} bottles of beer on the wall`)
    bottles -=1
  }
  console.log(`1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`)
};

//recursive answer
function bottleSongRecursive(n){
  
  if ( n > 1 )
  {
    console.log(`${n} bottles of beer on the wall, ${n} bottles of beer.
    Take one down and pass it around, ${n-1} bottles of beer on the wall`)
    return bottleSongRecursive(n-1)
  }

  else { 
    console.log(
      `1 bottle of beer on the wall, 1 bottle of beer.
    Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
    )
  }
}

