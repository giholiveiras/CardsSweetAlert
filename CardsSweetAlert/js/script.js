function AdicionaraoCarrinho(){
    Swal.fire({
        title: "Item adicionado ao carrinho!",
        text: "Continue comprando!",
        icon: "success"
      });
}

function FinalizarCompra(){
    Swal.fire({
        title: "Deseja finalizar sua compra?",
        text: "Vá para a pagina de pagamento!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar compra!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Compra finalizada!",
            icon: "success"
          });
        }
      });

}