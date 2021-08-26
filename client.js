const flora2QueryFakulteti = async ( query ) => {
  document.getElementById("prikazFakulteta").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  document.getElementById( "prikazFakulteta" ).innerHTML = JSON.stringify( result );
  //console.log(result);
}


const flora2QuerySveucilista = async ( query ) => {
  document.getElementById("prikazSveucilista").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  document.getElementById( "prikazSveucilista" ).innerHTML = JSON.stringify( result );
  //console.log(result);
}

const flora2QueryNastavnici = async ( query ) => {
  document.getElementById("prikazNastavnika").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  document.getElementById( "prikazNastavnika" ).innerHTML = JSON.stringify( result );
  //console.log(result);
}

const flora2QueryStudenti = async ( query ) => {
  document.getElementById("prikazStudenata").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  document.getElementById( "prikazStudenata" ).innerHTML = JSON.stringify( result );
  //console.log(result);
}

const flora2QueryRadovi = async ( query ) => {
  document.getElementById( "prikazRadova" ).innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  result.forEach(element => {
    document.getElementById( "prikazRadova" ).innerHTML += JSON.stringify("Tema: "+element["tema"]+"<br> Student:  "+element["student"]+" Mentor: "+element["mentor"]+"<br>").toString() + "<br>";
    
  });
  //document.getElementById( "prikazRadova" ).innerHTML = JSON.stringify( result );
  //console.log(result);
}

const flora2QueryPravilo1 = async ( query ) => {
  document.getElementById("pravilo1Rez").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  //document.getElementById( "pravilo1Rez" ).innerHTML = JSON.stringify( result );
  result.forEach(element => {
    document.getElementById( "pravilo1Rez" ).innerHTML += element["ime"]+"<br>";
    
  });
  
  //console.log(result);
}

const flora2QueryPravilo2 = async ( query ) => {
  document.getElementById("pravilo2Rez").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  //document.getElementById( "pravilo1Rez" ).innerHTML = JSON.stringify( result );
  result.forEach(element => {
    document.getElementById( "pravilo2Rez" ).innerHTML += element["ime"]+"<br>";
  });
}

const flora2QueryPravilo3 = async ( query ) => {
  document.getElementById("pravilo3Rez").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  //document.getElementById( "pravilo1Rez" ).innerHTML = JSON.stringify( result );
  result.forEach(element => {
    document.getElementById( "pravilo3Rez" ).innerHTML += element["ime"]+"<br>";
  });
}

const flora2QueryPravilo4 = async ( query ) => {
  if (document.getElementById("pravilo4Unos").innerHTML == "") {
    document.getElementById("pravilo4Unos").style.borderColor = 'red';
  }
  query = "?_:nastavnik[max_mentorstava("+query+")->?mm]."
  document.getElementById("pravilo4Rez").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  //document.getElementById( "pravilo1Rez" ).innerHTML = JSON.stringify( result );
  result.forEach(element => {
    let postotak = element["mm"]+"<br>";
    document.getElementById( "pravilo4Rez" ).innerHTML += "Nastavnik smije mentorirati "+postotak+"% upisanih studenata."+"<br>";
  });
}

const flora2QueryPravilo5 = async ( query ) => {
  
  query = "?_:nastavnik[ukupno_radova("+query+")->?uk].";
  document.getElementById("pravilo5Rez").innerHTML = "";
  query = query.replace( /\?/g, '%3F' )
  const response = await fetch( 'http://localhost:9876/query/' + query );
  const result = await response.json();
  //document.getElementById( "pravilo1Rez" ).innerHTML = JSON.stringify( result );
  result.forEach(element => {
    let brojRadova = element["uk"];
    document.getElementById( "pravilo5Rez" ).innerHTML += element["uk"]+"<br>";
    if (brojRadova < 20) {
      document.getElementById( "pravilo5Rez" ).innerHTML += "Nastavnik ima dozvoljen broj radova."+"<br>";
    } else {
      
    }
  });
  
  
}
