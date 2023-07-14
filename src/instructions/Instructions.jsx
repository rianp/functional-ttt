export const Instructions = () => {
  return (
    <div className="dropdown">
      <pre>
        {`*------------------------------------------------------------*
  *           Here are the instructions to the game!           *
  *------------------------------------------------------------*
  * 1. there are two players in the game (X and O)             *
  * 2. players can choose a 3x3 or a 5x5 board size            *
  * 3. a player can take a field if not already taken          *
  * 4. players take turns taking fields until the game is over *
  * 5. a game is over when:                                    *
  *   - all fields in a row are taken by a player              *
  *   - all fields in a column are taken by a player           *
  *   - all fields in a diagonal are taken by a player         *
  *   - all fields are taken                                   *
  *------------------------------------------------------------*`}
      </pre>
    </div>
  );
};
