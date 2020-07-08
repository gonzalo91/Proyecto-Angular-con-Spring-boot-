import  Swal  from 'sweetalert2';

export const Toast = Swal.mixin({ //when firing the toast, the first window closes automatically
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});