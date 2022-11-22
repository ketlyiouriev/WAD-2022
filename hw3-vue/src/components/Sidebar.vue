<template>
    <div class="sidebar"></div>
  </template>
  
  <script>
  export default {
    name: "Sidebar"
  }
  </script>
  
  <style scoped>

  .sidebar {
    flex: 1;
    background-color: #d3d3d3;
    border-radius: 10px;
}
  
  @media (max-width: 600px) {
    .sidebar {
      display: none;
    }
  }
  </style>