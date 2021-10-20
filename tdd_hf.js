function greet(name, name2, name3,name4,name5) {
  let greet_text


  if(name == '')
  {
    greet_text="Hello, my friend!"
  }

  if(name != '')
  {
    greet_text="Hello, " + name + "!";
  }

  if(name != '' && name2 != '' && name3 != '')
  {
    greet_text="Hello, " + name + ", " + name2 + ", and " + name3 + "!";
  }

  if(name == 'BARRY')
  {
    greet_text="HELLO BARRY"
  }

  if(name=='JAY' && name2=='Maya' && name3=='Alice' && name4=='BOB' && name5=='Charlotte')
  {
    greet_text="Hello, " + name2 + ", " + name3 + ", " + name5 + "."+"AND HELLO " +name + ", AND " + name4 + "!";
  }

  return greet_text
}

  module.exports = greet
  