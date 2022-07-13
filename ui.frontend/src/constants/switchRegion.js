export function switchRegion(region) {
    let acronym = "";
  
// eslint-disable-next-line
    switch (region) {
      case "Acre":
        acronym = "AC";
        break;
      case "Alagoas":
        acronym = "AL";
        break;
      case "Amapá":
        acronym = "AP";
        break;
      case "Amazonas":
        acronym = "AM";
        break;
      case "Bhaia":
        acronym = "BA";
        break;
      case "Ceará":
        acronym = "CE";
        break;
      case "Espírito Santo":
        acronym = "ES";
        break;
      case "Goiás":
        acronym = "GO";
        break;
      case "Maranhão":
        acronym = "MA";
        break;
      case "Mato Grosso":
        acronym = "MT";
        break;
      case "Mato Grosso do Sul":
        acronym = "MS";
        break;
      case "Minas Gerais":
        acronym = "MG";
        break;
      case "Pará":
        acronym = "PA";
        break;
      case "Paraíba":
        acronym = "PB";
        break;
      case "Paraná":
        acronym = "PR";
        break;
      case "Pernambuco":
        acronym = "PE";
        break;
      case "Piauí":
        acronym = "PI";
        break;
      case "Rio de Janeiro":
        acronym = "RJ";
        break;
      case "Rio Grande do Norte":
        acronym = "RN";
        break;
      case "Rio Grande do Sul":
        acronym = "RS";
        break;
      case "Rondônia":
        acronym = "RO";
        break;
      case "Roraima":
        acronym = "RR";
        break;
      case "Santa Catarina":
        acronym = "SC";
        break;
      case "São Paulo":
        acronym = "SP";
        break;
      case "Sergipe":
        acronym = "SE";
        break;
      case "Tocantins":
        acronym = "TO";
        break;
    }
    return acronym;
  }