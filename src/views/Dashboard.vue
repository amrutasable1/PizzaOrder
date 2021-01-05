<template>
    <div class="dashboard"> 
        <!-- <div class="header">
            <a ><img src="@/assets/images/elements/pizzafree.png" width="100"></a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div> -->
        <div>
            <img src="@/assets/images/elements/pizza.png" id="bg" alt="" >
            <v-treeview
    selectable
    selected-color="red"
    :items="items"
  ></v-treeview>
        </div>
    </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          id: 1,
          name: 'Order Received :',
          children: [
            { id: 2, name: 'St. Louis Pizza',
                children: [
                    { id: 3, name: 'Customer Name - Mr. Vijay Rame' },
                ]
            },
            { id: 4, name: 'Detroit Pizza' ,
                children: [
                    { id: 5, name: 'Customer Name - Mrs. Rani Sharma' },
                ]
            },
            { id: 6, name: 'New York-Style Pizza' ,
                children: [
                    { id: 7, name: 'Customer Name - Mrs. Rahul Jadhav' },
                ]
            },
            { id: 8, name: ' California Pizza',
                children: [
                    { id: 9, name: 'Customer Name - Mr. Priyak Joshi' },
                ]
            },
            { id: 10, name: 'Greek Pizza',
                children: [
                    { id: 3, name: 'Customer Name - Mr. Adi Pandebu' },
                ]
            },
            
          ],
        },
        {
          id: 11,
          name: 'Preparing :',
          children: [
             { id: 12, name: 'New York-Style Pizza',
                children: [
                    { id: 13, name: 'Number Of Items - 2' },
                ]
            },
             { id: 14, name: 'Greek Pizza',
                children: [
                    { id: 15, name: 'Number Of Items - 7' },
                ]
             },
             { id: 16, name: 'California Pizza',
                children: [
                    { id: 17, name: 'Number Of Items - 4' },
                ]
            },
            { id: 18, name: 'St. Louis Pizza',
                children: [
                    { id: 19, name: 'Number Of Items - 6' },
                ]
            },
            { id: 20, name: 'Detroit Pizza',
                children: [
                    { id: 21, name: 'Number Of Items - 6' },
                ]
            },
          ],
        },
        
        {
          id: 22,
          name: 'Ready to serve  :',
          children: [
            { id: 23, name: 'California Pizza' },
            { id: 24, name: 'New York-Style Pizza' },
            { id: 25, name: 'Greek Pizza' },
          ],
        },
      ],
    }),
  }
</script>

<style scoped>
    #bg {
        position: fixed; 
        top: 10; 
        left: 0; 
            
        /* Preserve aspet ratio */
        min-width: 100%;
        min-height: 100%;
    }
    /* Style the header with a grey background and some padding */
    .header {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 20px 10px;
    }

    /* Style the header links */
    .header a {
        float: left;
        color: black;
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
    }

    /* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
    .header a.logo {
        font-size: 25px;
        font-weight: bold;
    }

    /* Change the background color on mouse-over */
    .header a:hover {
        background-color: #ddd;
        color: black;
    }

    /* Style the active/current link*/
    .header a.active {
        background-color: dodgerblue;
        color: white;
    }

    /* Float the link section to the right */
    .header-right {
        float: right;
    }

    /* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */
    @media screen and (max-width: 500px) {
        .header a {
            float: none;
            display: block;
            text-align: left;
        }
        .header-right {
            float: none;
        }
    }
</style>