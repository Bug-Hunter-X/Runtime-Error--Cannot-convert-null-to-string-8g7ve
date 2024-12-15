# TypeScript Null Handling Bug

This repository demonstrates a common issue in TypeScript where assigning null to a string variable can lead to runtime errors if not handled appropriately. The `bug.ts` file contains the buggy code, and the `bugSolution.ts` file provides a corrected version.

## Bug Description

The bug arises from the fact that TypeScript, by default, allows assigning `null` to string variables.  This can lead to runtime errors when attempting to perform string operations on a null value, such as calling `toUpperCase()` in the example code.

## Solution

The solution involves adding explicit null checks using conditional checks or optional chaining to handle cases where the variable might be null.