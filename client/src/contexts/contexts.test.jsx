import { describe, it } from 'vitest';

describe('My Test Suite', () => {
  it('Test 1', () => {
    // Your test logic here
  });

 
});// import { cleanup, render, screen } from '@testing-library/react';
// import { describe, it, beforeEach, afterEach } from 'vitest';
// import { DataProvider, useData } from '.'; 

// describe('DataContext', () => {
//   beforeEach(() => {
//     render(
//       <DataProvider>
//         <ChildComponent /> 
//       </DataProvider>
//     );
//   });

//   afterEach(() => {
//     cleanup
//   });

//   it('Provides initial context values', () => {
//     const data = useData();
//     expect(data.breakLength).toBe(0.1 * 100);
//     expect(data.questions).toEqual([]);
//     expect(data.beginGameError).toBeUndefined();
//     expect(data.howTo).toBeUndefined();
//     expect(data.session).toBe(1);
//     expect(data.username).toBe("");
//     expect(data.token).toBe("");
//   });

//   it('Allows setting and retrieving context values', () => {
//     const data = useData();

//     data.setHowTo(1);
//     data.setBreakLength(50);

//     expect(data.howTo).toBe(1);
//     expect(data.breakLength).toBe(50);
//   });

// });

// function ChildComponent() {
//   const data = useData();
//   return (
//     <div>
//       <span data-testid="howTo">{data.howTo}</span>
//       <span data-testid="breakLength">{data.breakLength}</span>
     
//     </div>
//   );
// }
