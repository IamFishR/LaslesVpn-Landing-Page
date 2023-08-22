tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#F53838',
        primary_light: '#FFECEC',
        gray: {
          600: '#4F5665',
          700: '#f8f8f8',
          900: '#0B132A',
          400: '#EEEFF2'
        }
      },
    }
  }
};

window.addEventListener('load', function(e) {
  
  const t_nav_left = document.querySelector('.t-card-arrow.left');
  const t_nav_right = document.querySelector('.t-card-arrow.right');
  let current_t_nav = 1;
  const slide_per_step = window.innerWidth < 1000 ? 1 : 3;
  const total_steps = Math.round(document.querySelector('.t-trailers').childElementCount / slide_per_step); // slide 3 elements at once.
  const container = document.querySelector('.t-trailers').children[0];
  let space = container.clientWidth + (window.innerWidth < 1000 ? 30 : 51);
  let total_left = 0;

  t_nav_left.addEventListener("click", (e) => {
    update_t_state('prev');
  });
  
  t_nav_right.addEventListener("click", (e) => {
    update_t_state('next');
  });
  
  
  
  const update_t_state = (params) => {
    if(params == 'next') {
      if(current_t_nav >= total_steps) {
        return;
      }
      current_t_nav++;
      total_left = parseFloat(total_left) + parseFloat((space * slide_per_step).toFixed(2));
      container.style.marginLeft = '-' + total_left.toString()  + 'px';
    } else {
      if(current_t_nav <= 1) {
        return;
      }
      
      current_t_nav--;
      total_left = parseFloat(total_left) - parseFloat((space * slide_per_step).toFixed(2));
      container.style.marginLeft = '-' + total_left.toString()  + 'px';
    }
    
  }
  
  
//   menu icon
  const menu_items = document.querySelectorAll('.menu-item');
  if(window.innerWidth < 1000) {
    const hide_menu = (e) => {
      menu_items.forEach((el) => el.style.display = 'none'); 
    }
    
    hide_menu();
    
    const show_menu = (e) => {
      menu_items.forEach((el) => el.style.display = 'flex'); 
    }
    
    document.querySelector('.menu-icon').addEventListener('click', (e) => {
      if(getComputedStyle(menu_items[0]).display == 'none') {
        show_menu();
      } else {
        hide_menu();
      }
    });
  }
});