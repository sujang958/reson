# svelte-passkey-auth

## 0.0.136

### Patch Changes

- Updated dependencies [b526ab6]
- Updated dependencies [d69aa68]
  - jazz-tools@0.18.3

## 0.0.135

### Patch Changes

- jazz-tools@0.18.2

## 0.0.134

### Patch Changes

- Updated dependencies [af5fbe7]
- Updated dependencies [9837459]
  - jazz-tools@0.18.1

## 0.0.133

### Patch Changes

- f263856: Add `$jazz` field to CoValues:
  - This field contains Jazz methods that cluttered CoValues' API, as well as Jazz internal properties. This field is not enumerable, to allow CoValues to behave similarly to JSON objects.
  - Added a `$jazz.set` method to update a CoValue's fields. When updating collaborative fields, you can pass in JSON objects instead of CoValues and Jazz will create
    the CoValues automatically (similarly to CoValue `create` methods).
  - All CoMap methods have been moved into `$jazz`, to allow defining any arbitrary key in the CoMap (except for `$jazz`) without conflicts.
    - For CoMaps created with `co.map`, fields are now `readonly` to prevent setting properties directly. Use the `$jazz.set` method instead.
    - CoMaps created with class schemas don't get type errors on direct property assignments, but they get a runtime errors prompting indicating to use `$jazz.set`.
    - the `delete` operator can no longer be used to delete CoRecord properties. Use `$jazz.delete` instead.
  - CoList's array-mutation methods have been moved into `$jazz`, in order to prevent using methods
    - CoLists are now readonly arrays. Trying to use any mutation method yields a type error.
    - `$jazz.set` can be used in place of direct element assignments.
    - Added two new utility methods: `$jazz.remove` and `$jazz.retain`. They allow editing a CoList in-place with a simpler API than `$jazz.splice`.
    - `sort`, `reverse`, `fill` and `copyWithin` have been deprecated, given that they could behave inconsistently with CoLists. `$jazz` replacements may be introduced
      in future releases.
  - `.$jazz.owner` now always returns a Group (instead of a Group or an Account). We'll be migrating away of having Accounts as CoValue owners in future releases.
  - Removed `castAs`, since it's an inherently unsafe operation that bypassed typechecking and enabled using CoValues in unsupported ways.
  - Removed the `id` and `_type` fields from `toJSON()`'s output in Account, CoMap, CoFeed & FileStream, to make CoValues behave more similarly to JSON objects.
  - Removed the `root` and `profile` fields from Group.
- Updated dependencies [f263856]
  - jazz-tools@0.18.0

## 0.0.132

### Patch Changes

- Updated dependencies [cc2f774]
  - jazz-tools@0.17.14

## 0.0.131

### Patch Changes

- Updated dependencies [d208cd1]
- Updated dependencies [7821a8b]
  - jazz-tools@0.17.13

## 0.0.130

### Patch Changes

- 1ccae1a: RN Expo E2E dependency fixes w catalog
- Updated dependencies [1ccae1a]
  - jazz-tools@0.17.12

## 0.0.129

### Patch Changes

- Updated dependencies [8f3852b]
- Updated dependencies [bb9d837]
  - jazz-tools@0.17.11

## 0.0.128

### Patch Changes

- jazz-tools@0.17.10

## 0.0.127

### Patch Changes

- Updated dependencies [52ea0c7]
  - jazz-tools@0.17.9

## 0.0.126

### Patch Changes

- Updated dependencies [ac3e694]
- Updated dependencies [6dbb053]
- Updated dependencies [1a182f0]
  - jazz-tools@0.17.8

## 0.0.125

### Patch Changes

- jazz-tools@0.17.7

## 0.0.124

### Patch Changes

- Updated dependencies [82de51c]
- Updated dependencies [694b168]
  - jazz-tools@0.17.6

## 0.0.123

### Patch Changes

- Updated dependencies [5963658]
  - jazz-tools@0.17.5

## 0.0.122

### Patch Changes

- Updated dependencies [7dd3d00]
  - jazz-tools@0.17.4

## 0.0.121

### Patch Changes

- jazz-tools@0.17.3

## 0.0.120

### Patch Changes

- Updated dependencies [794681a]
- Updated dependencies [83fc22f]
  - jazz-tools@0.17.2

## 0.0.119

### Patch Changes

- Updated dependencies [0bcbf55]
- Updated dependencies [d1bdbf5]
- Updated dependencies [4b73834]
  - jazz-tools@0.17.1

## 0.0.118

### Patch Changes

- Updated dependencies [fcaf4b9]
  - jazz-tools@0.17.0

## 0.0.117

### Patch Changes

- Updated dependencies [67e0968]
- Updated dependencies [2c8120d]
  - jazz-tools@0.16.6

## 0.0.116

### Patch Changes

- Updated dependencies [3cd1586]
- Updated dependencies [33ebbf0]
  - jazz-tools@0.16.5

## 0.0.115

### Patch Changes

- Updated dependencies [16764f6]
  - jazz-tools@0.16.4

## 0.0.114

### Patch Changes

- Updated dependencies [43d3511]
  - jazz-tools@0.16.3

## 0.0.113

### Patch Changes

- jazz-tools@0.16.2

## 0.0.112

### Patch Changes

- Updated dependencies [c62abef]
  - jazz-tools@0.16.1

## 0.0.111

### Patch Changes

- Updated dependencies [c09dcdf]
- Updated dependencies [2bbb07b]
  - jazz-tools@0.16.0

## 0.0.110

### Patch Changes

- Updated dependencies [9633d01]
- Updated dependencies [4beafb7]
  - jazz-tools@0.15.16

## 0.0.109

### Patch Changes

- Updated dependencies [3fe53a3]
  - jazz-tools@0.15.15

## 0.0.108

### Patch Changes

- Updated dependencies [a584590]
- Updated dependencies [9acccb5]
  - jazz-tools@0.15.14

## 0.0.107

### Patch Changes

- Updated dependencies [6c76ff8]
  - jazz-tools@0.15.13

## 0.0.106

### Patch Changes

- Updated dependencies [d1c1b0c]
- Updated dependencies [cf4ad72]
  - jazz-tools@0.15.12

## 0.0.105

### Patch Changes

- Updated dependencies [bdc9aee]
  - jazz-tools@0.15.11

## 0.0.104

### Patch Changes

- Updated dependencies [9815ec6]
- Updated dependencies [b4fdab4]
  - jazz-tools@0.15.10

## 0.0.103

### Patch Changes

- Updated dependencies [27b4837]
  - jazz-tools@0.15.9

## 0.0.102

### Patch Changes

- Updated dependencies [3844666]
  - jazz-tools@0.15.8

## 0.0.101

### Patch Changes

- Updated dependencies [c09b636]
  - jazz-tools@0.15.7

## 0.0.100

### Patch Changes

- Updated dependencies [a5ceaff]
  - jazz-tools@0.15.6

## 0.0.99

### Patch Changes

- Updated dependencies [23bfea5]
- Updated dependencies [e4ba23c]
- Updated dependencies [4b89838]
  - jazz-tools@0.15.5

## 0.0.98

### Patch Changes

- jazz-tools@0.15.4

## 0.0.97

### Patch Changes

- Updated dependencies [45f73a7]
  - jazz-tools@0.15.3

## 0.0.96

### Patch Changes

- Updated dependencies [0e7e532]
  - jazz-tools@0.15.2

## 0.0.95

### Patch Changes

- Updated dependencies [0e3a4d2]
- Updated dependencies [b110f00]
  - jazz-tools@0.15.1

## 0.0.94

### Patch Changes

- Updated dependencies [1378a1f]
- Updated dependencies [0fa051a]
  - jazz-tools@0.15.0

## 0.0.93

### Patch Changes

- Updated dependencies [06c5a1c]
  - jazz-tools@0.14.28
  - jazz-inspector-element@0.14.28
  - jazz-svelte@0.14.28

## 0.0.92

### Patch Changes

- Updated dependencies [a026073]
  - jazz-tools@0.14.27
  - jazz-inspector-element@0.14.27
  - jazz-svelte@0.14.27

## 0.0.91

### Patch Changes

- Updated dependencies [e35a380]
  - jazz-svelte@0.14.26
  - jazz-tools@0.14.26
  - jazz-inspector-element@0.14.26

## 0.0.90

### Patch Changes

- Updated dependencies [99a2d9b]
  - jazz-tools@0.14.25
  - jazz-inspector-element@0.14.25
  - jazz-svelte@0.14.25
