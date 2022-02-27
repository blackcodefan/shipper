import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body, html {
    height: 100%;
    margin: 0;
}
  h1, h2, h3, h4, h5, h6, p, span, div, i, li, a, button {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6{
  font-weight: bold;
  }
  input:-webkit-autofill{
  background-color: #353535;
  -webkit-box-shadow: 0 0 0 1000px #353535 inset !important;
    -webkit-text-fill-color: white !important;
    color: white;
}
  
  // Content style
  .ant-page-header{
  @media(max-width: 768px){
      padding: 0;
    }
  }
  
  // Button styles
  .ant-btn:not(.ant-btn-link) {
    height: 55px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 13px;
    padding: 20px 30px;
    letter-spacing: 0.5px;
    border: none;
    &.ant-btn-sm {
      height:44px;
      padding: 0 20px;
    }
    &.ant-btn-lg {
      height: 65px;
      padding: 0 80px;
      font-size: 16px;
    }
    &.ant-btn-icon-only{
       padding: 0;
     }
     &:not(.ant-btn-circle){
     border-radius: 5px;
     } 
  }
  .ant-divider-horizontal {
        margin: 20px 0;
    }
  .ant-divider{
    border-top: 1px solid #737373;
    }
   .ant-space{
    width: 100%;
   }
   
   // Input with prefix icon style
   .ant-input-affix-wrapper  {
      &.dark{
          border: none;
          background: #353535;
          .ant-input{
           background: transparent;
           color: #fff;
           ::placeholder{
                color: #737373;
                font-size: 18px;
           }
       }
      }
      &.light{
        background: rgba(255, 255, 255, 0.9);
        height: 54px;
        .ant-input{
           background: transparent;
           color: #000;
           padding-left: 10px;
           ::placeholder{
                color: #737373;
                font-size: 18px;
           }
       }
      }
       border-radius: 5px;
       .ant-input-prefix{
          margin-left: 10px;
          margin-right: 16px;
       }
   }
   .ant-input-affix-wrapper-lg{
    height: 65px;
    &.light{height: 81px;}
   } 
   
   // Checkbox style
   .ant-checkbox-inner{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #20A5F5;
   }
   .ant-checkbox-checked .ant-checkbox-inner{
    border-radius: 5px;
    background-color: #20A5F5;
    border:none;
    :after{
    top: 49%;
    left: 26%;
    }
   }
   .ant-checkbox-checked:after {
    border-radius: 5px;
    border:none;
   }
   
   // Tree select style
   .ant-select-selection-item-remove, .ant-select-multiple .ant-select-selection-item-remove{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .ant-select:not(.ant-select-customize-input) .ant-select-selector{
    background: #353535;
    border-radius: 5px;
    border: none;
   }
   .ant-select-multiple .ant-select-selector{
    padding: 15px;
   }
   .ant-select-arrow{
      width: 25px;
      top: 40%;
      height: auto;
    }
    .ant-select-sm{
      .ant-select-arrow{
      top:36%;
    }
    }
   .ant-select-dropdown{
    background: #353535;
    padding: 20px;
    border-radius: 5px;
    .ant-select-tree-list{
        .ant-select-tree-switcher{
            width: 0
        }
        background: #353535;
        .ant-select-tree-checkbox{
            margin: 0 8px 0 0;
        }
        .ant-select-tree-list-holder{
            border:none;
        }
        .ant-select-tree-node-content-wrapper{
            background: #353535;
            color: white;
        }
    }
    .ant-select-tree-treenode-checkbox-checked{
        .ant-select-tree-node-content-wrapper{
            color: #20A5F5;
        }
    }
   }
   .ant-select-tree-checkbox-inner{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #20A5F5;
   }
   .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner{
    background: #20A5F5;
    border: none;
    :after{
        position: absolute;
        top: 49%;
        left: 26%;
    }
   }
   .ant-select-multiple .ant-select-selection-item{
    background: #000;
    height: 36px;
    border-radius: 5px;
    border: 1px solid #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
   }
    .ant-select-item{
        color: white!important;
    }
    .ant-select-item-option-active:not(.ant-select-item-option-disabled){
        :focus, :hover, :active{
          background-color: #353535!important;
        }
    }
    .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
      background-color: #353535!important;
    }
    .ant-select-item.ant-select-item-option.ant-select-item-option-active{
    background-color: #353535!important;
    }
   
   // Input without prefix icon
   .ant-form-item{
    .ant-form-item-label > label{
        color: #fff;
        font-size: 13px;
        line-height: 15px;
        .label-option{
          color:  #737373;
        }
    }
    .ant-input{
        border: none;
        border-radius: 10px;
        &.dark{
            background: #353535;
            color: #fff;
            ::placeholder{
              color: #737373;
            }
        }
        &.ant-input-lg{
          height: 65px;
          padding: 20px 30px;
          font-size: 13px;
        }
    }
    .ant-form-item-extra {
       .forgot-pwd {
          text-align: right;
        }
      .ant-btn-link{
        color: #20A5F5;
      }
    }
   }
   
   // slider style
   .ant-slider:hover .ant-slider-track {
        background-color: #20A5F5!important;
    }
    .ant-slider:hover .ant-slider-rail {
      background-color: #353535;
    }
    .ant-slider-with-marks{
      margin-bottom: 6px;
     }
    
    // Avatar style
    .ant-avatar-circle.ant-avatar-image{
      box-sizing: border-box;
      +.ant-badge-dot{
        width: 22px;
        height: 22px;
      }
    }
   
   // Home page styles
   .page{
    background-size: cover;
     background-position: center center;
     min-height: 100vh;
     box-sizing: border-box;
     background-repeat: repeat-y;
     &.static-height{
      height: 100vh;
     }
     &.background-half{
      background-size: 50% 100%;
      background-position: left;
      background-repeat: no-repeat;
     }
   }
   
   // Search page styles
   .ant-collapse:not(.ant-collapse-ghost){
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    .ant-collapse-header, .ant-collapse-content{
      background: transparent;
      color: white;
    }
  }
  .ant-collapse-item:last-child > .ant-collapse-content{
    border-radius: 10px;
    border: none;
  }
  .ant-collapse > .ant-collapse-item:last-child{
    border-radius: 10px;
  }
  .ant-collapse > .ant-collapse-item{
  border: none;
  }
  .ant-carousel {
    position: relative;
      :after{
        position: absolute;
        content: "";
        display: block;
        height: 65px;
        width: 70px;
        background: linear-gradient(90deg, #00000011 0%, rgba(0,0,0,0.7) 100%);;
        right: 0;
        top: 10px;
      }
  }
  .ant-carousel .slick-list .slick-slide{
    pointer-events: auto;
  }
  .ant-collapse-ghost{
      .ant-collapse-content > .ant-collapse-content-box{
        padding: 0;
      }
  }
  
  
  // Review page style
  .sm-hide{
    @media(max-width: 576px){
    display: none;
    }
  }
  .ant-steps-item-finish .ant-steps-item-icon,
  .ant-steps-item-process.ant-steps-item-custom .ant-steps-item-icon{
    background: #20A5F5!important;
    .ant-steps-icon{
        color: #fff;
    }
  }
  .ant-steps-item-wait.ant-steps-item-custom .ant-steps-item-icon{
    background: #353535!important;
  }
  .ant-steps-item-wait .ant-steps-item-icon{
    background: #353535;
    .ant-steps-icon{
      color: #AAAAAA;
    }
  }
  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content{
     > .ant-steps-item-description{
         color: #fff;
     }
     > .ant-steps-item-title{
      color: #fff;
     }
  }
  .ant-steps-item-title{
    @media(min-width: 576px){
      margin-top: 7px;
    }
  }
  .ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item{
    padding-left: 0;
  }
  .ant-tabs-top > .ant-tabs-nav::before{
    border: none;
  }
  .ant-tabs-nav-list{
    width: 100%;
    gap: 10px;
    .ant-tabs-tab{
        width: 50%;
        height: 45px;
        color: #737373;
        justify-content: center;
        font-weight: bold;
    }
  }
  .ant-tabs-card > .ant-tabs-nav .ant-tabs-tab{
    border: none;
    border-bottom: 1px solid #353535;
    background: transparent;
    &.ant-tabs-tab-active{
      background: #20A5F5;
      border: none;
      .ant-tabs-tab-btn {
        color: #fff;
      }
    }
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab{
    border-radius: 5px 5px 0 0;
  }
  .ant-select-selector{
    display: flex;
    align-items: center;
    border: none!important;
    color: white!important;
  }
  .ant-input-group-wrapper{
    .ant-input{
        height: 65px;
        background: #353535;
        border-radius: 10px;
        color: white;
        border: none;
        ::placeholder{
          font-size: 14px;
          line-height: 16px;
          color: #737373;
        }
    }
    .ant-input-group-addon{
      border-radius: 0 10px 10px 0;
      background: #353535;
      border: none;
      :focus{
      border: none;
      }
    }
  }
  
  .cancel-modal{
    .ant-modal-content{
      background-color: #000;
      padding: 15px;
      .ant-modal-close-x{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ant-modal-footer{
        text-align: center;
        border: none;
      }
    }
  }
  
  .dt-picker-modal{
    .ant-modal-content{
      background-color: transparent;
      padding: 0;
      .ant-modal-close{
        display: none;
      }
      .ant-modal-body{
        padding: 0;
      }
      .ant-modal-footer{
        text-align: center;
        border: none;
      }
    }
  }
  
  .Calendar{
    background: #353535;
    border-radius: 0;
    width: 300px;
    .Calendar__header{
      color: white;
      .Calendar__monthArrow{
        background: transparent;
        transition: none;
      }
      .-left{
        transform: none;
        .Calendar__monthArrow::after{
          position: absolute;
          content: url("./img/next.png");
        }
      }
      .-right{
        transform: none;
        .Calendar__monthArrow::after{
          position: absolute;
          content: url("./img/back.png");
        }
      }
    }
    .Calendar__day{
      color: white;
      &.Calendar__day.-ltr{
        min-height: 35px;
      }
    }
    .calendar-selected{
      background: #20A5F5;
    }
    .Calendar__weekDays::after{
      content: '';
      position: absolute;
      width: 235px;
      border: 1px solid #000;
      bottom: -5px;
    }
  }
  
  .ant-dropdown-placement-bottomRight > .ant-dropdown-arrow{
    border-top-color: #353535;
    border-left-color: #353535;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.15);
  }
`;
