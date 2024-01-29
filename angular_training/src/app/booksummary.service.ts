import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksummaryService {
 
    SummaryMap = [
      { bookname: 'Ikigai', summary: 'Ikigai explores the secrets to a long and happy life, blending the Japanese concepts of "iki" (life) and "gai" (worth). It delves into finding purpose and joy through everyday activities.' },
      { bookname: 'Circe', summary: 'Circe tells the enchanting story of the mythological sorceress Circe, daughter of Helios. It weaves a tale of transformation, power, and self-discovery in a world of gods and monsters.' },
      { bookname: 'Meluha', summary: 'The Immortals of Meluha is an epic fantasy that follows the journey of Shiva, a tribal leader, as he discovers his destiny as the savior of the ancient land of Meluha.' },
      { bookname: 'Harry Potter', summary: 'The Harry Potter series follows the magical adventures of a young wizard, Harry, and his friends as they navigate the wizarding world, facing challenges, uncovering mysteries, and battling dark forces.' },
      { bookname: 'Fantastic Beasts', summary: 'Fantastic Beasts and Where to Find Them is a magical encyclopedia of magical creatures in the wizarding world. It provides insights into the fantastic beasts that inhabit J.K. Rowling\'s magical universe.' },
      { bookname: 'The Casual Vacancy', summary: 'The Casual Vacancy is a contemporary novel that explores the intricacies of small-town politics, social divisions, and personal struggles in the aftermath of a sudden vacancy on the parish council.' },
      { bookname: 'Murder on the Orient Express', summary: 'In Murder on the Orient Express, master detective Hercule Poirot investigates a murder that occurs on the famous luxury train. The story unfolds with twists and turns, keeping readers on the edge of their seats.' },
      { bookname: 'And Then There Were None', summary: 'And Then There Were None is a classic mystery novel where ten strangers are invited to a remote island, only to discover that they are being accused of crimes they committed in the past. As they are systematically killed, the mystery deepens.' },
      { bookname: 'The Murder of Roger Ackroyd', summary: 'The Murder of Roger Ackroyd is a classic detective novel by Agatha Christie. It is known for its innovative narrative style and a surprising twist that challenges the conventions of traditional mystery storytelling.' },
      { bookname: '1984', summary: '1984 is a dystopian novel that explores the consequences of a totalitarian regime. George Orwells masterpiece delves into themes of government surveillance, thought control, and the struggle for individual freedom.' },
      { bookname: 'Animal Farm', summary: 'Animal Farm is a satirical novella that uses farm animals to allegorically represent political events leading up to the Russian Revolution of 1917. It explores themes of power, corruption, and the dangers of totalitarianism.' },
      { bookname: 'Homage to Catalonia', summary: 'Homage to Catalonia is George Orwell\'s personal account of his experiences during the Spanish Civil War. It provides a firsthand perspective on the complexities of the conflict and Orwell\'s reflections on the politics of the time.' },
    ];
    
  

  constructor() { } 

  public Summary(name : string): string{
    let obj=this.SummaryMap.find(ele => ele.bookname.toLowerCase() == name.toLowerCase())

    if(obj!=null)
   return this.titleCase(obj.summary);
  else
    return "Book not fund";
  }

  

  public titleCase(value: string): string {
    if (!value) return value;
    return value.split(" ").map((word) => {
      return word.length > 0
        ? word[0].toUpperCase() + word.substring(1).toLowerCase()
        : word;
    }).join(" ");
  }

 
}
