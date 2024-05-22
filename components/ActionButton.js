const ActionButton = ({ title = "Inscreva-se" }) => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_HOTLINK}
      className="relative block mt-20 pt-4 pb-4 pl-11 text-center font-bold uppercase pr-11 rounded-full border border-blue-400 bg-gradient-to-r from-blue-600 to-blue-400 text-neutral-900 text-xl z-10 hover:opacity-90 active:scale-95"
      title="Ir para a página do evento"
    >
      {title}
    </a>
  );
};
export default ActionButton;
