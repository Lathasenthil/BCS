
# 🛡️ Marvel-Themed JavaScript Assessment

---

## ⭐ Easy

<details>
<summary>1. Hero ID Formatter (⭐)</summary>

### Task

Prompt the user for a hero’s name. Convert it to lowercase and uppercase. Display both on separate lines.

#### Example 1

**Input**: `"BlackPanther"`
**Output**:

```
blackpanther  
BLACKPANTHER
```

#### Example 2

**Input**: `"  ScarletWitch "`
**Output**:

```
scarletwitch  
SCARLETWITCH
```

</details>

---

<details>
<summary>2. Suit Version Type Check (⭐)</summary>

### Task

Tony inputs the suit version as a string. Convert it to number and log the type before and after conversion.

#### Example 1

**Input**: `"85"`
**Output**:

var number=window.prompt("number")

string  
number
```

#### Example 2

**Input**: `"007"`
**Output**:

```
string  
number
```


### Task

Ask the user for a sound effect (e.g., `"Smash!"`) and echo it 3 times in a single line.

#### Example 1

**Input**: `"Smash!"`
**Output**:

```
Smash!Smash!Smash!
```
### Answer 
###
console.log("Expecto smash".repeat(3));

#### Example 2

**Input**: `"Boom "`
**Output**:

```
Boom Boom Boom 
```

### Answer 
###
console.log("Expecto Boom".repeat(3));


---

## ⭐⭐⭐ Medium


<summary>4. Stark Credits Calculator (⭐⭐⭐)</summary>

### Task

Prompt for two separate Stark wallet balances (as strings). Convert both to numbers and display the total credits.

#### Example 1

**Input**: `"1000"`, `"5000"`
**Output**:

```
Your total balance is 6000 credits.
```

#### Example 2

**Input**: `"250"`, `"250"`
**Output**:

```
Your total balance is 500 credits.
```



---

<details>
<summary>5. Shield Temperature Scanner (⭐⭐⭐)</summary>

### Task

Prompt for the shield’s surface temperature in Celsius.

* > 120 → "🔥 Overheated!"
* < -10 → "❄️ Frozen!"
* Else → "🛡️ Stable."

#### Example 1

**Input**: `130`
**Output**:

```
🔥 Overheated!
```

#### Example 2

**Input**: `25`
**Output**:

```
🛡️ Stable.
```

</details>

---

<details>
<summary>6. Infinity Stone Energy Rank (⭐⭐⭐)</summary>

### Task

Prompt for the power level (0–100) of an infinity stone.
Rank:

* 90+ → "Legendary 💎"
* 60–89 → "Potent ⚡"
* <60 → "Weak 🪨"

#### Example 1

**Input**: `95`
**Output**:

```
Legendary 💎
```

#### Example 2

**Input**: `58`
**Output**:

```
Weak 🪨
```

</details>

---

<details>
<summary>7. Stark Email Generator (⭐⭐⭐)</summary>

### Task

Prompt for a name. Trim and convert it to lowercase. Output the Stark Industries email.

#### Example 1

**Input**: `" Peter "`
**Output**:

```
peter@starkindustries.com
```

#### Example 2

**Input**: `"WARMachine"`
**Output**:

```
warmachine@starkindustries.com
```

</details>

---

<details>
<summary>8. Jarvis Access Gate (⭐⭐⭐)</summary>

### Task

Prompt for an access code (number).

* 1000–1999 → “Access granted”
* Exactly 1700 → “⚠️ Override mode activated”
* Else → “Access denied”

#### Example 1

**Input**: `1024`
**Output**:

```
Access granted
```

#### Example 2

**Input**: `1700`
**Output**:

```
⚠️ Override mode activated
```

</details>

---

## ⭐⭐⭐⭐ Hard

<details>
<summary>9. Speed Duel – Quicksilver vs Hawkeye (⭐⭐⭐⭐)</summary>

### Task

Prompt for their speeds. Log who is faster and by how much (in km/h).

#### Example 1

**Input**: `180`, `90`
**Output**:

```
Quicksilver is faster than Hawkeye by 90 km/h.
```

#### Example 2

**Input**: `150`, `160`
**Output**:

```
Hawkeye is faster than Quicksilver by 10 km/h.
```

</details>

---

<details>
<summary>10. S.H.I.E.L.D. Agent Validation (⭐⭐⭐⭐)</summary>

### Task

Prompt for a name. Normalize the input (trim + lowercase).
Validate against allowed agents: `"natasha"`, `"clint"`, `"nick"`.

* If match → "🛡️ Access granted"
* Else → "⛔ Unauthorized"

#### Example 1

**Input**: `"  NiCk "`
**Output**:

```
🛡️ Access granted
```

#### Example 2

**Input**: `"tony"`
**Output**:

```
⛔ Unauthorized
```

</details>
