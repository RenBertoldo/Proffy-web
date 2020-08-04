import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/38046801?s=460&u=d0dead7f3bff3dc90bf9ff3a99bd500d25893c73&v=4"
          alt="Renan Bertoldo"
        />
        <div>
          <strong>Renan Bertoldo</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec
        fringilla nisl. Etiam libero purus, pretium eu molestie a, rhoncus eget
        nibh. Vivamus vitae sodales arcu. Suspendisse condimentum commodo risus,
        a hendrerit eros dignissim eu. Duis facilisis mi et nisl placerat, vitae
        fermentum diam consectetur. Integer venenatis ipsum in enim finibus
        porta. Proin vehicula diam nec est condimentum faucibus. Fusce elementum
        ipsum orci, a tincidunt leo sodales efficitur. Nullam vel maximus massa.
        Aenean aliquet sem non molestie facilisis. Cras varius, elit quis
        ultrices tincidunt, lacus mauris vulputate mi, sed molestie dui metus
        non elit.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 30,00 </strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
