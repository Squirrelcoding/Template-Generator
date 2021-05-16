# Template Generator

This is an npm package that can generate templates for several programming languages and HTML.


## How to use
To generate a template for lets say... C++, just run the command `generate` and you will get a menu, choose C++ template and then choose the file name, directory and extension. You should see a new file be created called whatever you named it. In this case its `file.cpp`. And inside `file.cpp`, you will just see a template to get started:

```cpp
#include <iostream>
using namespace std;

int main() {
  
  // Write your code here (This comment will not be included in the template generated)
  
  return 0;
}
```

Right now, its not yet an npm package.