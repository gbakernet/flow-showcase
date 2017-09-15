// @flow

// ## Inference

{
  function square(n) {
    return n * n
  }

  // square("2")
}

{
  function add(a, b) {
    return a + a
  }

  // add(2, "5")
}

// ## Annotations

{
  function square(n: number): number {
    return n * n
  }

  // square("2")
}

{
  function add(a: number, b: number): number {
    return a + b
  }

  // add(2, "5")
}

// ## Annotations for bindings

{
  const year: number = 2017
}

{
  const add = (a: number, b: number): number => {
    return a + b
  }

  // add(5, "3")
}

{
  // This is not as readable
  const add: (a: number, b: number) => number = (a, b) => {
    return a + b
  }

  // add(5, "3")
}
