<style>
    .container {
        padding: 16px 16px 16px 16px;
    }

    h2 {
        display: inline;
    }
</style>

<div class="container">
  <h1>Changelog</h1>
  <details open>
    <summary><h2>1.2.0</h2></summary>
    <ul>
      <li>Added the Settings page, where you can select which set(s) a random card should be chosen from</li>
      <li>
        Fixed an issue where if the flavor text had for instance 'SPINDA' in full capitals, it would not be replaced by
        'BLANK'
      </li>
      <li>Added changelog page</li>
    </ul>
  </details>

  <details>
    <summary><h2>1.1.0</h2></summary>
    <ul>
      <li>Better name detection to replace the Pokémon name with "BLANK". For instance if the card is called
        "Galarian Moltres" and there is "Moltres" in the flavor text, it gets replaced.
      </li>
      <li>
        Answers do not need to include the gender signs (♀ and ♂). So for example "Nidoran" would suffice for
        either "Nidoran ♀" or "Nidoran ♂"
      </li>
      <li>Added changelog page</li>
    </ul>
  </details>

  <details>
    <summary><h2>1.0.0</h2></summary>
    Initial release
  </details>
</div>
