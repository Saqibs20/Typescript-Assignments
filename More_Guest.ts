let Guest_List: string[] = ["Saqib", "Samad", "Shahroz"];

// for (let i = 0; i < Guest_List.length; i++) {
//   console.log(
//     "Dear Mr. " +
//       Guest_List[i] +
//       ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
//   );
// }

let absent_Guest :string = 'Shahroz' ;

let new_Guest :string = 'Hussain Ansari' ;

Guest_List[0] = new_Guest ;

for (let i = 0; i < Guest_List.length; i++) {
    console.log(
      "Dear Mr. " +
        Guest_List[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
    )
  }
 
  console.log(`Mr.${absent_Guest} is not coming the party.`);

  console.log('Good News! we find big table so we are inviting 3 more guest.')

  Guest_List.unshift('Kamran tessoroi');
  Guest_List.splice(2 , 0 , 'Maryam Nawaz');
  Guest_List.push('Bilawal Bhutto Zardari');

  for (let i = 0; i < Guest_List.length; i++) {
    console.log(
      "Dear Mr. " +
        Guest_List[i] +
        ",\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n"
    )
  }
