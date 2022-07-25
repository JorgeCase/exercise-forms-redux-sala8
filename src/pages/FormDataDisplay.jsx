import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  componentDidMount() {
    const { informations } = this.props;
    console.log(informations);
  }

  render() {
    const { informations: {
      name,
      email,
      cpf,
      address,
      city,
      uf,
      description,
      job,
      curriculum,

    } } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}
FormDataDisplay.propTypes = {
  informations: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  curriculum: PropTypes.string.isRequired,
  uf: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,

};

const mapStateToProps = (store) => ({
  informations: { ...store.personalReducer, ...store.professionalReducer },
});

export default connect(mapStateToProps, null)(FormDataDisplay);
