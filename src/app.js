
window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['com', 'net', 'us', 'io'];
    let pronouns = ['the', 'our'];
    let adjectives = ['great', 'big'];
    let nouns = ['jogger', 'racoon'];
    let extensions = ['com', 'net', 'us', 'io'];

  for (let a = 0; a < pronoun.length; a++) {
   for (let b = 0; b < adj.length; b++) {
       for (let c = 0; c < noun.length; c++) {
         let domain = pronoun[a] + adj[b] + noun[c];
         for (let d = 0; d < extensions.length; d++) {
         console.log(domain + '.' + extensions[d]);
         }
    for (let pronoun of pronouns) {
        for (let adjective of adjectives) {
            for (let noun of nouns) {
                let domain = pronoun + adjective + noun;
                for (let extension of extensions) {
                    console.log(domain + '.' + extension);
                }
            }
        }
      }
  }
}
    }   
   };