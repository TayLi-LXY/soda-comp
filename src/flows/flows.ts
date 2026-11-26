import { register, load } from '@horsecoder/flow';
import { loadMy } from './flows_my';
import { flowQueryOrderDetailsBasedOnOrderIdFacade as dialogueFlowQueryOrderDetailsBasedOnOrderIdFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/QueryOrderDetailsBasedOnOrderId';
import dialogueFlowQueryOrderDetailsBasedOnOrderId from '@/flows/com.horsecoder.platform.mall.dialogue/QueryOrderDetailsBasedOnOrderId/flow.json';
import { flowSearchForPackagesBasedOnCodeFacade as dialogueFlowSearchForPackagesBasedOnCodeFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/SearchForPackagesBasedOnCode';
import dialogueFlowSearchForPackagesBasedOnCode from '@/flows/com.horsecoder.platform.mall.dialogue/SearchForPackagesBasedOnCode/flow.json';
import { flowQueryPackageFacade as dialogueFlowQueryPackageFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/QueryPackage';
import dialogueFlowQueryPackage from '@/flows/com.horsecoder.platform.mall.dialogue/QueryPackage/flow.json';
import { flowGetWeChatCallbackAndSetTemporarykenFacade as dialogueFlowGetWeChatCallbackAndSetTemporarykenFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/GetWeChatCallbackAndSetTemporaryken';
import dialogueFlowGetWeChatCallbackAndSetTemporaryken from '@/flows/com.horsecoder.platform.mall.dialogue/GetWeChatCallbackAndSetTemporaryken/flow.json';
import { flowQueryStatusOfSmartAccountsBasedOnirIdsFacade as dialogueFlowQueryStatusOfSmartAccountsBasedOnirIdsFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/QueryStatusOfSmartAccountsBasedOnirIds';
import dialogueFlowQueryStatusOfSmartAccountsBasedOnirIds from '@/flows/com.horsecoder.platform.mall.dialogue/QueryStatusOfSmartAccountsBasedOnirIds/flow.json';
import { flowUpdateDataIntelligentAccountStatusFacade as dialogueFlowUpdateDataIntelligentAccountStatusFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/UpdateDataIntelligentAccountStatus';
import dialogueFlowUpdateDataIntelligentAccountStatus from '@/flows/com.horsecoder.platform.mall.dialogue/UpdateDataIntelligentAccountStatus/flow.json';
import { flowVerifyPaymentAccountFacade as dialogueFlowVerifyPaymentAccountFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/VerifyPaymentAccount';
import dialogueFlowVerifyPaymentAccount from '@/flows/com.horsecoder.platform.mall.dialogue/VerifyPaymentAccount/flow.json';
import { flowCreateDataSmartAccountMembershipFacade as dialogueFlowCreateDataSmartAccountMembershipFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership';
import dialogueFlowCreateDataSmartAccountMembership from '@/flows/com.horsecoder.platform.mall.dialogue/CreateDataSmartAccountMembership/flow.json';
import { flowRegisterFacade as dialogueFlowRegisterFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/Register';
import dialogueFlowRegister from '@/flows/com.horsecoder.platform.mall.dialogue/Register/flow.json';
import { flowWeChatBindingPhoneNumberRegistrationFacade as dialogueFlowWeChatBindingPhoneNumberRegistrationFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/WeChatBindingPhoneNumberRegistration';
import dialogueFlowWeChatBindingPhoneNumberRegistration from '@/flows/com.horsecoder.platform.mall.dialogue/WeChatBindingPhoneNumberRegistration/flow.json';
import { flowMigrationOfTemporaryUserConversationsFacade as dialogueFlowMigrationOfTemporaryUserConversationsFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/MigrationOfTemporaryUserConversations';
import dialogueFlowMigrationOfTemporaryUserConversations from '@/flows/com.horsecoder.platform.mall.dialogue/MigrationOfTemporaryUserConversations/flow.json';
import { flowCreateTemporaryUserFacade as dialogueFlowCreateTemporaryUserFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateTemporaryUser';
import dialogueFlowCreateTemporaryUser from '@/flows/com.horsecoder.platform.mall.dialogue/CreateTemporaryUser/flow.json';
import { flowGetListOfDialogueMessagesFacade as dialogueFlowGetListOfDialogueMessagesFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages';
import dialogueFlowGetListOfDialogueMessages from '@/flows/com.horsecoder.platform.mall.dialogue/GetListOfDialogueMessages/flow.json';
import { flowBasedOnContentSummaryOfInitializeFileFacade as dialogueFlowBasedOnContentSummaryOfInitializeFileFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/BasedOnContentSummaryOfInitializeFile';
import dialogueFlowBasedOnContentSummaryOfInitializeFile from '@/flows/com.horsecoder.platform.mall.dialogue/BasedOnContentSummaryOfInitializeFile/flow.json';
import { flowInitializeResultsBasedOnQueryResultsAndDisplaymFacade as dialogueFlowInitializeResultsBasedOnQueryResultsAndDisplaymFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/InitializeResultsBasedOnQueryResultsAndDisplaym';
import dialogueFlowInitializeResultsBasedOnQueryResultsAndDisplaym from '@/flows/com.horsecoder.platform.mall.dialogue/InitializeResultsBasedOnQueryResultsAndDisplaym/flow.json';
import { flowIntelligentDataQueryFacade as dialogueFlowIntelligentDataQueryFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery';
import dialogueFlowIntelligentDataQuery from '@/flows/com.horsecoder.platform.mall.dialogue/IntelligentDataQuery/flow.json';
import { flowGetDialogueSchemaListFacade as dialogueFlowGetDialogueSchemaListFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList';
import dialogueFlowGetDialogueSchemaList from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaList/flow.json';
import { flowCreateADialogueFacade as dialogueFlowCreateADialogueFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/CreateADialogue';
import dialogueFlowCreateADialogue from '@/flows/com.horsecoder.platform.mall.dialogue/CreateADialogue/flow.json';
import { flowGetDialogueSchemaDataCsvUrlFacade as dialogueFlowGetDialogueSchemaDataCsvUrlFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaDataCsvUrl';
import dialogueFlowGetDialogueSchemaDataCsvUrl from '@/flows/com.horsecoder.platform.mall.dialogue/GetDialogueSchemaDataCsvUrl/flow.json';
import { flowExecuteIntelligentDataTasksFacade as dialogueFlowExecuteIntelligentDataTasksFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/ExecuteIntelligentDataTasks';
import dialogueFlowExecuteIntelligentDataTasks from '@/flows/com.horsecoder.platform.mall.dialogue/ExecuteIntelligentDataTasks/flow.json';
import { flowUpdateTaskStatusAndOutputFacade as dialogueFlowUpdateTaskStatusAndOutputFacade } from '@/flows/com.horsecoder.platform.mall.dialogue/UpdateTaskStatusAndOutput';
import dialogueFlowUpdateTaskStatusAndOutput from '@/flows/com.horsecoder.platform.mall.dialogue/UpdateTaskStatusAndOutput/flow.json';
import { flowDialogueAccountRegistrationFacade as aiMarketingFlowDialogueAccountRegistrationFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/DialogueAccountRegistration';
import aiMarketingFlowDialogueAccountRegistration from '@/flows/com.horsecoder.platform.mall.aiMarketing/DialogueAccountRegistration/flow.json';
import { flowDialogueAccountLoginFacade as aiMarketingFlowDialogueAccountLoginFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/DialogueAccountLogin';
import aiMarketingFlowDialogueAccountLogin from '@/flows/com.horsecoder.platform.mall.aiMarketing/DialogueAccountLogin/flow.json';
import { flowGetLatestSpaceFacade as aiMarketingFlowGetLatestSpaceFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/GetLatestSpace';
import aiMarketingFlowGetLatestSpace from '@/flows/com.horsecoder.platform.mall.aiMarketing/GetLatestSpace/flow.json';
import { flowGetLatestNewsBasedOnConversationAccountIdFacade as aiMarketingFlowGetLatestNewsBasedOnConversationAccountIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/GetLatestNewsBasedOnConversationAccountId';
import aiMarketingFlowGetLatestNewsBasedOnConversationAccountId from '@/flows/com.horsecoder.platform.mall.aiMarketing/GetLatestNewsBasedOnConversationAccountId/flow.json';
import { flowAddTemporaryMessageFacade as aiMarketingFlowAddTemporaryMessageFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/AddTemporaryMessage';
import aiMarketingFlowAddTemporaryMessage from '@/flows/com.horsecoder.platform.mall.aiMarketing/AddTemporaryMessage/flow.json';
import { flowGeneratePagesBasedOnDialogueModelRequirementsAnalysisFacade as aiMarketingFlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/GeneratePagesBasedOnDialogueModelRequirementsAnalysis';
import aiMarketingFlowGeneratePagesBasedOnDialogueModelRequirementsAnalysis from '@/flows/com.horsecoder.platform.mall.aiMarketing/GeneratePagesBasedOnDialogueModelRequirementsAnalysis/flow.json';
import { flowSubscriptionMembersFacade as aiMarketingFlowSubscriptionMembersFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/SubscriptionMembers';
import aiMarketingFlowSubscriptionMembers from '@/flows/com.horsecoder.platform.mall.aiMarketing/SubscriptionMembers/flow.json';
import { flowQueryPageListBasedOnDialogueModelFacade as aiMarketingFlowQueryPageListBasedOnDialogueModelFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryPageListBasedOnDialogueModel';
import aiMarketingFlowQueryPageListBasedOnDialogueModel from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryPageListBasedOnDialogueModel/flow.json';
import { flowCreateADialogueModelFacade as aiMarketingFlowCreateADialogueModelFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateADialogueModel';
import aiMarketingFlowCreateADialogueModel from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateADialogueModel/flow.json';
import { flowCreateDialogueModelKnowledgeFacade as aiMarketingFlowCreateDialogueModelKnowledgeFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateDialogueModelKnowledge';
import aiMarketingFlowCreateDialogueModelKnowledge from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateDialogueModelKnowledge/flow.json';
import { flowDetermineWhetherCurrentConversationAndDialogueModelExistFacade as aiMarketingFlowDetermineWhetherCurrentConversationAndDialogueModelExistFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/DetermineWhetherCurrentConversationAndDialogueModelExist';
import aiMarketingFlowDetermineWhetherCurrentConversationAndDialogueModelExist from '@/flows/com.horsecoder.platform.mall.aiMarketing/DetermineWhetherCurrentConversationAndDialogueModelExist/flow.json';
import { flowPageGenerationFacade as aiMarketingFlowPageGenerationFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/PageGeneration';
import aiMarketingFlowPageGeneration from '@/flows/com.horsecoder.platform.mall.aiMarketing/PageGeneration/flow.json';
import { flowSendAMessageFacade as aiMarketingFlowSendAMessageFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/SendAMessage';
import aiMarketingFlowSendAMessage from '@/flows/com.horsecoder.platform.mall.aiMarketing/SendAMessage/flow.json';
import { flowCreateAConversationFacade as aiMarketingFlowCreateAConversationFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateAConversation';
import aiMarketingFlowCreateAConversation from '@/flows/com.horsecoder.platform.mall.aiMarketing/CreateAConversation/flow.json';
import { flowQueryConversationAccountDetailsBasedOnIdFacade as aiMarketingFlowQueryConversationAccountDetailsBasedOnIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationAccountDetailsBasedOnId';
import aiMarketingFlowQueryConversationAccountDetailsBasedOnId from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationAccountDetailsBasedOnId/flow.json';
import { flowUpdateCurrentConversationAccountTypeFacade as aiMarketingFlowUpdateCurrentConversationAccountTypeFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/UpdateCurrentConversationAccountType';
import aiMarketingFlowUpdateCurrentConversationAccountType from '@/flows/com.horsecoder.platform.mall.aiMarketing/UpdateCurrentConversationAccountType/flow.json';
import { flowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisFacade as aiMarketingFlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/GenerateCoreModelBasedOnDialogueModelRequirementsAnalysis';
import aiMarketingFlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysis from '@/flows/com.horsecoder.platform.mall.aiMarketing/GenerateCoreModelBasedOnDialogueModelRequirementsAnalysis/flow.json';
import { flowUpdateStatusOfDialogueDetailsFacade as aiMarketingFlowUpdateStatusOfDialogueDetailsFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/UpdateStatusOfDialogueDetails';
import aiMarketingFlowUpdateStatusOfDialogueDetails from '@/flows/com.horsecoder.platform.mall.aiMarketing/UpdateStatusOfDialogueDetails/flow.json';
import { flowQueryDialogueModelDetailsAndDialogueModelInformationListFacade as aiMarketingFlowQueryDialogueModelDetailsAndDialogueModelInformationListFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList';
import aiMarketingFlowQueryDialogueModelDetailsAndDialogueModelInformationList from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelDetailsAndDialogueModelInformationList/flow.json';
import { flowProjectNameIdentificationFacade as aiMarketingFlowProjectNameIdentificationFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/ProjectNameIdentification';
import aiMarketingFlowProjectNameIdentification from '@/flows/com.horsecoder.platform.mall.aiMarketing/ProjectNameIdentification/flow.json';
import { flowVerifyreAlreadyAnInvitationLinkFacade as aiMarketingFlowVerifyreAlreadyAnInvitationLinkFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/VerifyreAlreadyAnInvitationLink';
import aiMarketingFlowVerifyreAlreadyAnInvitationLink from '@/flows/com.horsecoder.platform.mall.aiMarketing/VerifyreAlreadyAnInvitationLink/flow.json';
import { flowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdFacade as aiMarketingFlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/SearchForRequirementAnalysisDocumentBasedOnDialogueModelId';
import aiMarketingFlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelId from '@/flows/com.horsecoder.platform.mall.aiMarketing/SearchForRequirementAnalysisDocumentBasedOnDialogueModelId/flow.json';
import { flowRequirementAnalysisFacade as aiMarketingFlowRequirementAnalysisFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/RequirementAnalysis';
import aiMarketingFlowRequirementAnalysis from '@/flows/com.horsecoder.platform.mall.aiMarketing/RequirementAnalysis/flow.json';
import { flowQueryDialogueModelBasedOnDialogueIdAndModelIdFacade as aiMarketingFlowQueryDialogueModelBasedOnDialogueIdAndModelIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelBasedOnDialogueIdAndModelId';
import aiMarketingFlowQueryDialogueModelBasedOnDialogueIdAndModelId from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelBasedOnDialogueIdAndModelId/flow.json';
import { flowQueryDialogueBasedOnDialogueModelIdFacade as aiMarketingFlowQueryDialogueBasedOnDialogueModelIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueBasedOnDialogueModelId';
import aiMarketingFlowQueryDialogueBasedOnDialogueModelId from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueBasedOnDialogueModelId/flow.json';
import { flowQueryDialogueModelListBasedOnUserIdFacade as aiMarketingFlowQueryDialogueModelListBasedOnUserIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelListBasedOnUserId';
import aiMarketingFlowQueryDialogueModelListBasedOnUserId from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryDialogueModelListBasedOnUserId/flow.json';
import { flowQueryConversationDetailsFacade as aiMarketingFlowQueryConversationDetailsFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationDetails';
import aiMarketingFlowQueryConversationDetails from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationDetails/flow.json';
import { flowProjectNameIntelligentAgentCallFacade as aiMarketingFlowProjectNameIntelligentAgentCallFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/ProjectNameIntelligentAgentCall';
import aiMarketingFlowProjectNameIntelligentAgentCall from '@/flows/com.horsecoder.platform.mall.aiMarketing/ProjectNameIntelligentAgentCall/flow.json';
import { flowCoreModelGenerationFacade as aiMarketingFlowCoreModelGenerationFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/CoreModelGeneration';
import aiMarketingFlowCoreModelGeneration from '@/flows/com.horsecoder.platform.mall.aiMarketing/CoreModelGeneration/flow.json';
import { flowQueryCoreModelListBasedOnDialogueModelFacade as aiMarketingFlowQueryCoreModelListBasedOnDialogueModelFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryCoreModelListBasedOnDialogueModel';
import aiMarketingFlowQueryCoreModelListBasedOnDialogueModel from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryCoreModelListBasedOnDialogueModel/flow.json';
import { flowDeleteConversationBasedOnIdFacade as aiMarketingFlowDeleteConversationBasedOnIdFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/DeleteConversationBasedOnId';
import aiMarketingFlowDeleteConversationBasedOnId from '@/flows/com.horsecoder.platform.mall.aiMarketing/DeleteConversationBasedOnId/flow.json';
import { flowQueryConversationHistoryFacade as aiMarketingFlowQueryConversationHistoryFacade } from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationHistory';
import aiMarketingFlowQueryConversationHistory from '@/flows/com.horsecoder.platform.mall.aiMarketing/QueryConversationHistory/flow.json';
import { flowFilterProductListIncludingSpecificationsFacade as mallFlowFilterProductListIncludingSpecificationsFacade } from '@/flows/com.horsecoder.platform.mall/FilterProductListIncludingSpecifications';
import mallFlowFilterProductListIncludingSpecifications from '@/flows/com.horsecoder.platform.mall/FilterProductListIncludingSpecifications/flow.json';
import { flowDeleteProductFacade as mallFlowDeleteProductFacade } from '@/flows/com.horsecoder.platform.mall/DeleteProduct';
import mallFlowDeleteProduct from '@/flows/com.horsecoder.platform.mall/DeleteProduct/flow.json';
import { flowQueryShoppingCartProductListAndPurchasedProductListForMallUserFacade as mallFlowQueryShoppingCartProductListAndPurchasedProductListForMallUserFacade } from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListAndPurchasedProductListForMallUser';
import mallFlowQueryShoppingCartProductListAndPurchasedProductListForMallUser from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListAndPurchasedProductListForMallUser/flow.json';
import { flowSearchShoppingCartBasedOnMallUserIdFacade as mallFlowSearchShoppingCartBasedOnMallUserIdFacade } from '@/flows/com.horsecoder.platform.mall/SearchShoppingCartBasedOnMallUserId';
import mallFlowSearchShoppingCartBasedOnMallUserId from '@/flows/com.horsecoder.platform.mall/SearchShoppingCartBasedOnMallUserId/flow.json';
import { flowQueryShoppingCartProductListForMallUserFacade as mallFlowQueryShoppingCartProductListForMallUserFacade } from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListForMallUser';
import mallFlowQueryShoppingCartProductListForMallUser from '@/flows/com.horsecoder.platform.mall/QueryShoppingCartProductListForMallUser/flow.json';
import { flowTryShoppingCartProductsFacade as mallFlowTryShoppingCartProductsFacade } from '@/flows/com.horsecoder.platform.mall/TryShoppingCartProducts';
import mallFlowTryShoppingCartProducts from '@/flows/com.horsecoder.platform.mall/TryShoppingCartProducts/flow.json';
import { flowListingProductFacade as mallFlowListingProductFacade } from '@/flows/com.horsecoder.platform.mall/ListingProduct';
import mallFlowListingProduct from '@/flows/com.horsecoder.platform.mall/ListingProduct/flow.json';
import { flowCreateMallUsersAndOpenMarketAndPaymentAccountsFacade as mallFlowCreateMallUsersAndOpenMarketAndPaymentAccountsFacade } from '@/flows/com.horsecoder.platform.mall/CreateMallUsersAndOpenMarketAndPaymentAccounts';
import mallFlowCreateMallUsersAndOpenMarketAndPaymentAccounts from '@/flows/com.horsecoder.platform.mall/CreateMallUsersAndOpenMarketAndPaymentAccounts/flow.json';
import { flowAlipayPeriodicDeductionSigningFacade as payFlowAlipayPeriodicDeductionSigningFacade } from '@/flows/com.horsecoder.pay/AlipayPeriodicDeductionSigning';
import payFlowAlipayPeriodicDeductionSigning from '@/flows/com.horsecoder.pay/AlipayPeriodicDeductionSigning/flow.json';
import { flowQuerySubscriptionStatusFacade as payFlowQuerySubscriptionStatusFacade } from '@/flows/com.horsecoder.pay/QuerySubscriptionStatus';
import payFlowQuerySubscriptionStatus from '@/flows/com.horsecoder.pay/QuerySubscriptionStatus/flow.json';
import { flowObtainPaymentAccountDetailsFacade as payFlowObtainPaymentAccountDetailsFacade } from '@/flows/com.horsecoder.pay/ObtainPaymentAccountDetails';
import payFlowObtainPaymentAccountDetails from '@/flows/com.horsecoder.pay/ObtainPaymentAccountDetails/flow.json';
import { flowRestoreSubscriptionFacade as payFlowRestoreSubscriptionFacade } from '@/flows/com.horsecoder.pay/RestoreSubscription';
import payFlowRestoreSubscription from '@/flows/com.horsecoder.pay/RestoreSubscription/flow.json';
import { flowSubscriptionSignUpFacade as payFlowSubscriptionSignUpFacade } from '@/flows/com.horsecoder.pay/SubscriptionSignUp';
import payFlowSubscriptionSignUp from '@/flows/com.horsecoder.pay/SubscriptionSignUp/flow.json';
import { flowCreatePaymentOrderFacade as payFlowCreatePaymentOrderFacade } from '@/flows/com.horsecoder.pay/CreatePaymentOrder';
import payFlowCreatePaymentOrder from '@/flows/com.horsecoder.pay/CreatePaymentOrder/flow.json';
import { flowTerminationOfAlipayFacade as payFlowTerminationOfAlipayFacade } from '@/flows/com.horsecoder.pay/TerminationOfAlipay';
import payFlowTerminationOfAlipay from '@/flows/com.horsecoder.pay/TerminationOfAlipay/flow.json';
import { flowCreatePaymentAccountFacade as payFlowCreatePaymentAccountFacade } from '@/flows/com.horsecoder.pay/CreatePaymentAccount';
import payFlowCreatePaymentAccount from '@/flows/com.horsecoder.pay/CreatePaymentAccount/flow.json';
import { flowUnsubscribeFacade as payFlowUnsubscribeFacade } from '@/flows/com.horsecoder.pay/Unsubscribe';
import payFlowUnsubscribe from '@/flows/com.horsecoder.pay/Unsubscribe/flow.json';
import { flowCancelPaymentOrderFacade as payFlowCancelPaymentOrderFacade } from '@/flows/com.horsecoder.pay/CancelPaymentOrder';
import payFlowCancelPaymentOrder from '@/flows/com.horsecoder.pay/CancelPaymentOrder/flow.json';
import { flowVerifyOrderCompletedBasedOnOrderNumberFacade as payFlowVerifyOrderCompletedBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/VerifyOrderCompletedBasedOnOrderNumber';
import payFlowVerifyOrderCompletedBasedOnOrderNumber from '@/flows/com.horsecoder.pay/VerifyOrderCompletedBasedOnOrderNumber/flow.json';
import { flowPayBasedOnOrderNumberFacade as payFlowPayBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/PayBasedOnOrderNumber';
import payFlowPayBasedOnOrderNumber from '@/flows/com.horsecoder.pay/PayBasedOnOrderNumber/flow.json';
import { flowQueryOrderTypeBasedOnOrderNumberFacade as payFlowQueryOrderTypeBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/QueryOrderTypeBasedOnOrderNumber';
import payFlowQueryOrderTypeBasedOnOrderNumber from '@/flows/com.horsecoder.pay/QueryOrderTypeBasedOnOrderNumber/flow.json';
import { flowWeChatEntrustedSigningFacade as payFlowWeChatEntrustedSigningFacade } from '@/flows/com.horsecoder.pay/WeChatEntrustedSigning';
import payFlowWeChatEntrustedSigning from '@/flows/com.horsecoder.pay/WeChatEntrustedSigning/flow.json';
import { flowWeChatEntrustedWithholdingAndTerminationOfContractFacade as payFlowWeChatEntrustedWithholdingAndTerminationOfContractFacade } from '@/flows/com.horsecoder.pay/WeChatEntrustedWithholdingAndTerminationOfContract';
import payFlowWeChatEntrustedWithholdingAndTerminationOfContract from '@/flows/com.horsecoder.pay/WeChatEntrustedWithholdingAndTerminationOfContract/flow.json';
import { flowAlipayPeriodicDeductionExecutionFacade as payFlowAlipayPeriodicDeductionExecutionFacade } from '@/flows/com.horsecoder.pay/AlipayPeriodicDeductionExecution';
import payFlowAlipayPeriodicDeductionExecution from '@/flows/com.horsecoder.pay/AlipayPeriodicDeductionExecution/flow.json';
import { flowWeChatEntrustedWithholdingExecutionFacade as payFlowWeChatEntrustedWithholdingExecutionFacade } from '@/flows/com.horsecoder.pay/WeChatEntrustedWithholdingExecution';
import payFlowWeChatEntrustedWithholdingExecution from '@/flows/com.horsecoder.pay/WeChatEntrustedWithholdingExecution/flow.json';
import { flowPayOrderAndPerformRealTimeLiquidationFacade as payFlowPayOrderAndPerformRealTimeLiquidationFacade } from '@/flows/com.horsecoder.pay/PayOrderAndPerformRealTimeLiquidation';
import payFlowPayOrderAndPerformRealTimeLiquidation from '@/flows/com.horsecoder.pay/PayOrderAndPerformRealTimeLiquidation/flow.json';
import { flowQueryOrderDetailsBasedOnOrderNumberFacade as payFlowQueryOrderDetailsBasedOnOrderNumberFacade } from '@/flows/com.horsecoder.pay/QueryOrderDetailsBasedOnOrderNumber';
import payFlowQueryOrderDetailsBasedOnOrderNumber from '@/flows/com.horsecoder.pay/QueryOrderDetailsBasedOnOrderNumber/flow.json';
import { flowQueryOrderPaymentStatusBasedOnIdFacade as payFlowQueryOrderPaymentStatusBasedOnIdFacade } from '@/flows/com.horsecoder.pay/QueryOrderPaymentStatusBasedOnId';
import payFlowQueryOrderPaymentStatusBasedOnId from '@/flows/com.horsecoder.pay/QueryOrderPaymentStatusBasedOnId/flow.json';
import { flowCreateDataIntelligencePlatformUserFacade as identityFlowCreateDataIntelligencePlatformUserFacade } from '@/flows/com.horsecoder.identity/CreateDataIntelligencePlatformUser';
import identityFlowCreateDataIntelligencePlatformUser from '@/flows/com.horsecoder.identity/CreateDataIntelligencePlatformUser/flow.json';
import { flowCreateSpaceAndUpdateModelSpaceFacade as identityFlowCreateSpaceAndUpdateModelSpaceFacade } from '@/flows/com.horsecoder.identity/CreateSpaceAndUpdateModelSpace';
import identityFlowCreateSpaceAndUpdateModelSpace from '@/flows/com.horsecoder.identity/CreateSpaceAndUpdateModelSpace/flow.json';
import { flowDisabledUserFacade as identityFlowDisabledUserFacade } from '@/flows/com.horsecoder.identity/DisabledUser';
import identityFlowDisabledUser from '@/flows/com.horsecoder.identity/DisabledUser/flow.json';
import { flowEnteringSpaceFacade as identityFlowEnteringSpaceFacade } from '@/flows/com.horsecoder.identity/EnteringSpace';
import identityFlowEnteringSpace from '@/flows/com.horsecoder.identity/EnteringSpace/flow.json';
import { flowGetUserSpaceListFacade as identityFlowGetUserSpaceListFacade } from '@/flows/com.horsecoder.identity/GetUserSpaceList';
import identityFlowGetUserSpaceList from '@/flows/com.horsecoder.identity/GetUserSpaceList/flow.json';
import { flowLoginFacade as identityFlowLoginFacade } from '@/flows/com.horsecoder.identity/Login';
import identityFlowLogin from '@/flows/com.horsecoder.identity/Login/flow.json';
import { flowObtainingVerificationCodesWithoutVerifyingUsersFacade as identityFlowObtainingVerificationCodesWithoutVerifyingUsersFacade } from '@/flows/com.horsecoder.identity/ObtainingVerificationCodesWithoutVerifyingUsers';
import identityFlowObtainingVerificationCodesWithoutVerifyingUsers from '@/flows/com.horsecoder.identity/ObtainingVerificationCodesWithoutVerifyingUsers/flow.json';
import { flowObtainBusinessDesignAccountInformationBasedOnIdFacade as identityFlowObtainBusinessDesignAccountInformationBasedOnIdFacade } from '@/flows/com.horsecoder.identity/ObtainBusinessDesignAccountInformationBasedOnId';
import identityFlowObtainBusinessDesignAccountInformationBasedOnId from '@/flows/com.horsecoder.identity/ObtainBusinessDesignAccountInformationBasedOnId/flow.json';
import { flowObtainCaptchaFacade as identityFlowObtainCaptchaFacade } from '@/flows/com.horsecoder.identity/ObtainCaptcha';
import identityFlowObtainCaptcha from '@/flows/com.horsecoder.identity/ObtainCaptcha/flow.json';
import { flowObtainImageVerificationCodeFacade as identityFlowObtainImageVerificationCodeFacade } from '@/flows/com.horsecoder.identity/ObtainImageVerificationCode';
import identityFlowObtainImageVerificationCode from '@/flows/com.horsecoder.identity/ObtainImageVerificationCode/flow.json';
import { flowObtainLoginVerificationCodeFacade as identityFlowObtainLoginVerificationCodeFacade } from '@/flows/com.horsecoder.identity/ObtainLoginVerificationCode';
import identityFlowObtainLoginVerificationCode from '@/flows/com.horsecoder.identity/ObtainLoginVerificationCode/flow.json';
import { flowRegisterBusinessDesignAccountFacade as identityFlowRegisterBusinessDesignAccountFacade } from '@/flows/com.horsecoder.identity/RegisterBusinessDesignAccount';
import identityFlowRegisterBusinessDesignAccount from '@/flows/com.horsecoder.identity/RegisterBusinessDesignAccount/flow.json';
import { flowRetrieveListOfUsersOnManagementEndFacade as identityFlowRetrieveListOfUsersOnManagementEndFacade } from '@/flows/com.horsecoder.identity/RetrieveListOfUsersOnManagementEnd';
import identityFlowRetrieveListOfUsersOnManagementEnd from '@/flows/com.horsecoder.identity/RetrieveListOfUsersOnManagementEnd/flow.json';
import { flowUpdateSpaceWhichModelBelongsFacade as identityFlowUpdateSpaceWhichModelBelongsFacade } from '@/flows/com.horsecoder.identity/UpdateSpaceWhichModelBelongs';
import identityFlowUpdateSpaceWhichModelBelongs from '@/flows/com.horsecoder.identity/UpdateSpaceWhichModelBelongs/flow.json';
import { flowUserLoginVerificationFacade as identityFlowUserLoginVerificationFacade } from '@/flows/com.horsecoder.identity/UserLoginVerification';
import identityFlowUserLoginVerification from '@/flows/com.horsecoder.identity/UserLoginVerification/flow.json';
import { flowVerificationCodeLoginFacade as identityFlowVerificationCodeLoginFacade } from '@/flows/com.horsecoder.identity/VerificationCodeLogin';
import identityFlowVerificationCodeLogin from '@/flows/com.horsecoder.identity/VerificationCodeLogin/flow.json';
import { flowWeChatBindingPhoneNumberFacade as identityFlowWeChatBindingPhoneNumberFacade } from '@/flows/com.horsecoder.identity/WeChatBindingPhoneNumber';
import identityFlowWeChatBindingPhoneNumber from '@/flows/com.horsecoder.identity/WeChatBindingPhoneNumber/flow.json';
import { flowWeChatCallbackRetrieveUserInformationFacade as identityFlowWeChatCallbackRetrieveUserInformationFacade } from '@/flows/com.horsecoder.identity/WeChatCallbackRetrieveUserInformation';
import identityFlowWeChatCallbackRetrieveUserInformation from '@/flows/com.horsecoder.identity/WeChatCallbackRetrieveUserInformation/flow.json';
import { flowBatchRegistrationOfIMUserInformationFacade as imFlowBatchRegistrationOfIMUserInformationFacade } from '@/flows/com.horsecoder.im/BatchRegistrationOfIMUserInformation';
import imFlowBatchRegistrationOfIMUserInformation from '@/flows/com.horsecoder.im/BatchRegistrationOfIMUserInformation/flow.json';
import { flowBatchUpdateImCallbackInformationFacade as imFlowBatchUpdateImCallbackInformationFacade } from '@/flows/com.horsecoder.im/BatchUpdateImCallbackInformation';
import imFlowBatchUpdateImCallbackInformation from '@/flows/com.horsecoder.im/BatchUpdateImCallbackInformation/flow.json';
import { flowDeleteConversationFacade as imFlowDeleteConversationFacade } from '@/flows/com.horsecoder.im/DeleteConversation';
import imFlowDeleteConversation from '@/flows/com.horsecoder.im/DeleteConversation/flow.json';
import { flowGetAllUserIdsForSessionFacade as imFlowGetAllUserIdsForSessionFacade } from '@/flows/com.horsecoder.im/GetAllUserIdsForSession';
import imFlowGetAllUserIdsForSession from '@/flows/com.horsecoder.im/GetAllUserIdsForSession/flow.json';
import { flowImUsersReceiveMessagesFacade as imFlowImUsersReceiveMessagesFacade } from '@/flows/com.horsecoder.im/ImUsersReceiveMessages';
import imFlowImUsersReceiveMessages from '@/flows/com.horsecoder.im/ImUsersReceiveMessages/flow.json';
import { flowImUserCreateSessionsAndConversationsFacade as imFlowImUserCreateSessionsAndConversationsFacade } from '@/flows/com.horsecoder.im/ImUserCreateSessionsAndConversations';
import imFlowImUserCreateSessionsAndConversations from '@/flows/com.horsecoder.im/ImUserCreateSessionsAndConversations/flow.json';
import { flowMigrationOfImUserSessionFacade as imFlowMigrationOfImUserSessionFacade } from '@/flows/com.horsecoder.im/MigrationOfImUserSession';
import imFlowMigrationOfImUserSession from '@/flows/com.horsecoder.im/MigrationOfImUserSession/flow.json';
import { flowQueryChatRecordsWithoutPaginationBasedOnIdFacade as imFlowQueryChatRecordsWithoutPaginationBasedOnIdFacade } from '@/flows/com.horsecoder.im/QueryChatRecordsWithoutPaginationBasedOnId';
import imFlowQueryChatRecordsWithoutPaginationBasedOnId from '@/flows/com.horsecoder.im/QueryChatRecordsWithoutPaginationBasedOnId/flow.json';
import { flowQueryUserConversationListBasedOnUserIdFacade as imFlowQueryUserConversationListBasedOnUserIdFacade } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserId';
import imFlowQueryUserConversationListBasedOnUserId from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserId/flow.json';
import { flowQueryUserConversationListBasedOnUserIdListFacade as imFlowQueryUserConversationListBasedOnUserIdListFacade } from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList';
import imFlowQueryUserConversationListBasedOnUserIdList from '@/flows/com.horsecoder.im/QueryUserConversationListBasedOnUserIdList/flow.json';
import { flowRegisterAndSaveIMUserInformationFacade as imFlowRegisterAndSaveIMUserInformationFacade } from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation';
import imFlowRegisterAndSaveIMUserInformation from '@/flows/com.horsecoder.im/RegisterAndSaveIMUserInformation/flow.json';
import { flowRetrieveConversationInformationAndLastMessageBasedOnConversationIdFacade as imFlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdFacade } from '@/flows/com.horsecoder.im/RetrieveConversationInformationAndLastMessageBasedOnConversationId';
import imFlowRetrieveConversationInformationAndLastMessageBasedOnConversationId from '@/flows/com.horsecoder.im/RetrieveConversationInformationAndLastMessageBasedOnConversationId/flow.json';
import { flowSaveImMessageFacade as imFlowSaveImMessageFacade } from '@/flows/com.horsecoder.im/SaveImMessage';
import imFlowSaveImMessage from '@/flows/com.horsecoder.im/SaveImMessage/flow.json';
import { flowSearchForGroupChatNamesBasedOnConversationIdListFacade as imFlowSearchForGroupChatNamesBasedOnConversationIdListFacade } from '@/flows/com.horsecoder.im/SearchForGroupChatNamesBasedOnConversationIdList';
import imFlowSearchForGroupChatNamesBasedOnConversationIdList from '@/flows/com.horsecoder.im/SearchForGroupChatNamesBasedOnConversationIdList/flow.json';
import { flowSearchImChatRecordsBasedOnIdFacade as imFlowSearchImChatRecordsBasedOnIdFacade } from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId';
import imFlowSearchImChatRecordsBasedOnId from '@/flows/com.horsecoder.im/SearchImChatRecordsBasedOnId/flow.json';
import { flowUpdateIMCallbackInformationFacade as imFlowUpdateIMCallbackInformationFacade } from '@/flows/com.horsecoder.im/UpdateIMCallbackInformation';
import imFlowUpdateIMCallbackInformation from '@/flows/com.horsecoder.im/UpdateIMCallbackInformation/flow.json';
import { flowUpdateNicknameDictionaryBasedOnSenderIdListFacade as imFlowUpdateNicknameDictionaryBasedOnSenderIdListFacade } from '@/flows/com.horsecoder.im/UpdateNicknameDictionaryBasedOnSenderIdList';
import imFlowUpdateNicknameDictionaryBasedOnSenderIdList from '@/flows/com.horsecoder.im/UpdateNicknameDictionaryBasedOnSenderIdList/flow.json';
import { flowAddAndModifyPointsFacade as marketFlowAddAndModifyPointsFacade } from '@/flows/com.horsecoder.market/AddAndModifyPoints';
import marketFlowAddAndModifyPoints from '@/flows/com.horsecoder.market/AddAndModifyPoints/flow.json';
import { flowAddPointsChangeLogFacade as marketFlowAddPointsChangeLogFacade } from '@/flows/com.horsecoder.market/AddPointsChangeLog';
import marketFlowAddPointsChangeLog from '@/flows/com.horsecoder.market/AddPointsChangeLog/flow.json';
import { flowBatchCreationOfProductsAndirDependenciesFacade as marketFlowBatchCreationOfProductsAndirDependenciesFacade } from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies';
import marketFlowBatchCreationOfProductsAndirDependencies from '@/flows/com.horsecoder.market/BatchCreationOfProductsAndirDependencies/flow.json';
import { flowBatchRemovalOfProductsFacade as marketFlowBatchRemovalOfProductsFacade } from '@/flows/com.horsecoder.market/BatchRemovalOfProducts';
import marketFlowBatchRemovalOfProducts from '@/flows/com.horsecoder.market/BatchRemovalOfProducts/flow.json';
import { flowCalculateOrderPriceFacade as marketFlowCalculateOrderPriceFacade } from '@/flows/com.horsecoder.market/CalculateOrderPrice';
import marketFlowCalculateOrderPrice from '@/flows/com.horsecoder.market/CalculateOrderPrice/flow.json';
import { flowCreateEditPackageFacade as marketFlowCreateEditPackageFacade } from '@/flows/com.horsecoder.market/CreateEditPackage';
import marketFlowCreateEditPackage from '@/flows/com.horsecoder.market/CreateEditPackage/flow.json';
import { flowCreateEditPointsConsumptionSpecificationFacade as marketFlowCreateEditPointsConsumptionSpecificationFacade } from '@/flows/com.horsecoder.market/CreateEditPointsConsumptionSpecification';
import marketFlowCreateEditPointsConsumptionSpecification from '@/flows/com.horsecoder.market/CreateEditPointsConsumptionSpecification/flow.json';
import { flowCreateMarketingAccountAndOpenPaymentAccountFacade as marketFlowCreateMarketingAccountAndOpenPaymentAccountFacade } from '@/flows/com.horsecoder.market/CreateMarketingAccountAndOpenPaymentAccount';
import marketFlowCreateMarketingAccountAndOpenPaymentAccount from '@/flows/com.horsecoder.market/CreateMarketingAccountAndOpenPaymentAccount/flow.json';
import { flowCreateProductDependenciesFacade as marketFlowCreateProductDependenciesFacade } from '@/flows/com.horsecoder.market/CreateProductDependencies';
import marketFlowCreateProductDependencies from '@/flows/com.horsecoder.market/CreateProductDependencies/flow.json';
import { flowCreateProductDependenciesBasedOnProductCodesFacade as marketFlowCreateProductDependenciesBasedOnProductCodesFacade } from '@/flows/com.horsecoder.market/CreateProductDependenciesBasedOnProductCodes';
import marketFlowCreateProductDependenciesBasedOnProductCodes from '@/flows/com.horsecoder.market/CreateProductDependenciesBasedOnProductCodes/flow.json';
import { flowDeletePackageBasedOnIdFacade as marketFlowDeletePackageBasedOnIdFacade } from '@/flows/com.horsecoder.market/DeletePackageBasedOnId';
import marketFlowDeletePackageBasedOnId from '@/flows/com.horsecoder.market/DeletePackageBasedOnId/flow.json';
import { flowDeletePointsFacade as marketFlowDeletePointsFacade } from '@/flows/com.horsecoder.market/DeletePoints';
import marketFlowDeletePoints from '@/flows/com.horsecoder.market/DeletePoints/flow.json';
import { flowDeletePointsConsumptionSpecificationBasedOnIdFacade as marketFlowDeletePointsConsumptionSpecificationBasedOnIdFacade } from '@/flows/com.horsecoder.market/DeletePointsConsumptionSpecificationBasedOnId';
import marketFlowDeletePointsConsumptionSpecificationBasedOnId from '@/flows/com.horsecoder.market/DeletePointsConsumptionSpecificationBasedOnId/flow.json';
import { flowModifyPackageStatusFacade as marketFlowModifyPackageStatusFacade } from '@/flows/com.horsecoder.market/ModifyPackageStatus';
import marketFlowModifyPackageStatus from '@/flows/com.horsecoder.market/ModifyPackageStatus/flow.json';
import { flowObtainListOfProductsWithDependenciesFacade as marketFlowObtainListOfProductsWithDependenciesFacade } from '@/flows/com.horsecoder.market/ObtainListOfProductsWithDependencies';
import marketFlowObtainListOfProductsWithDependencies from '@/flows/com.horsecoder.market/ObtainListOfProductsWithDependencies/flow.json';
import { flowObtainListOfPurchasedProductsForAccountFacade as marketFlowObtainListOfPurchasedProductsForAccountFacade } from '@/flows/com.horsecoder.market/ObtainListOfPurchasedProductsForAccount';
import marketFlowObtainListOfPurchasedProductsForAccount from '@/flows/com.horsecoder.market/ObtainListOfPurchasedProductsForAccount/flow.json';
import { flowPackagePaginationQueryFacade as marketFlowPackagePaginationQueryFacade } from '@/flows/com.horsecoder.market/PackagePaginationQuery';
import marketFlowPackagePaginationQuery from '@/flows/com.horsecoder.market/PackagePaginationQuery/flow.json';
import { flowQueryListOfUserPointsChangeLogsFacade as marketFlowQueryListOfUserPointsChangeLogsFacade } from '@/flows/com.horsecoder.market/QueryListOfUserPointsChangeLogs';
import marketFlowQueryListOfUserPointsChangeLogs from '@/flows/com.horsecoder.market/QueryListOfUserPointsChangeLogs/flow.json';
import { flowQueryPackageBasedOnIdFacade as marketFlowQueryPackageBasedOnIdFacade } from '@/flows/com.horsecoder.market/QueryPackageBasedOnId';
import marketFlowQueryPackageBasedOnId from '@/flows/com.horsecoder.market/QueryPackageBasedOnId/flow.json';
import { flowQueryPointsBasedOnUserIdFacade as marketFlowQueryPointsBasedOnUserIdFacade } from '@/flows/com.horsecoder.market/QueryPointsBasedOnUserId';
import marketFlowQueryPointsBasedOnUserId from '@/flows/com.horsecoder.market/QueryPointsBasedOnUserId/flow.json';
import { flowQueryPointConsumptionStandardsBasedOnIdFacade as marketFlowQueryPointConsumptionStandardsBasedOnIdFacade } from '@/flows/com.horsecoder.market/QueryPointConsumptionStandardsBasedOnId';
import marketFlowQueryPointConsumptionStandardsBasedOnId from '@/flows/com.horsecoder.market/QueryPointConsumptionStandardsBasedOnId/flow.json';
import { flowQueryPointDetailsBasedOnPointIdFacade as marketFlowQueryPointDetailsBasedOnPointIdFacade } from '@/flows/com.horsecoder.market/QueryPointDetailsBasedOnPointId';
import marketFlowQueryPointDetailsBasedOnPointId from '@/flows/com.horsecoder.market/QueryPointDetailsBasedOnPointId/flow.json';
import { flowStandardPaginationQueryForPointConsumptionFacade as marketFlowStandardPaginationQueryForPointConsumptionFacade } from '@/flows/com.horsecoder.market/StandardPaginationQueryForPointConsumption';
import marketFlowStandardPaginationQueryForPointConsumption from '@/flows/com.horsecoder.market/StandardPaginationQueryForPointConsumption/flow.json';
import { flowSubmitProductOrdersFacade as marketFlowSubmitProductOrdersFacade } from '@/flows/com.horsecoder.market/SubmitProductOrders';
import marketFlowSubmitProductOrders from '@/flows/com.horsecoder.market/SubmitProductOrders/flow.json';
import { flowUpdateCurrentUserPointsFacade as marketFlowUpdateCurrentUserPointsFacade } from '@/flows/com.horsecoder.market/UpdateCurrentUserPoints';
import marketFlowUpdateCurrentUserPoints from '@/flows/com.horsecoder.market/UpdateCurrentUserPoints/flow.json';
import { flowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentFacade as marketFlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentFacade } from '@/flows/com.horsecoder.market/UpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment';
import marketFlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment from '@/flows/com.horsecoder.market/UpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment/flow.json';
import { flowVerifyListingStatusOfDependenciesBasedOnProductCodeListFacade as marketFlowVerifyListingStatusOfDependenciesBasedOnProductCodeListFacade } from '@/flows/com.horsecoder.market/VerifyListingStatusOfDependenciesBasedOnProductCodeList';
import marketFlowVerifyListingStatusOfDependenciesBasedOnProductCodeList from '@/flows/com.horsecoder.market/VerifyListingStatusOfDependenciesBasedOnProductCodeList/flow.json';
import { flowVerifyOnoffStatusOfProductsAndDependentProductsFacade as marketFlowVerifyOnoffStatusOfProductsAndDependentProductsFacade } from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProducts';
import marketFlowVerifyOnoffStatusOfProductsAndDependentProducts from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProducts/flow.json';
import { flowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesFacade as marketFlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesFacade } from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes';
import marketFlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes from '@/flows/com.horsecoder.market/VerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes/flow.json';
import { flowVerifyOrderProductsAndCalculateOrderPricesFacade as marketFlowVerifyOrderProductsAndCalculateOrderPricesFacade } from '@/flows/com.horsecoder.market/VerifyOrderProductsAndCalculateOrderPrices';
import marketFlowVerifyOrderProductsAndCalculateOrderPrices from '@/flows/com.horsecoder.market/VerifyOrderProductsAndCalculateOrderPrices/flow.json';
import { flowVerifyProductListHasBeenSettledFacade as marketFlowVerifyProductListHasBeenSettledFacade } from '@/flows/com.horsecoder.market/VerifyProductListHasBeenSettled';
import marketFlowVerifyProductListHasBeenSettled from '@/flows/com.horsecoder.market/VerifyProductListHasBeenSettled/flow.json';
import { flowVerifyStatusOfProductListingAndDelistingFacade as marketFlowVerifyStatusOfProductListingAndDelistingFacade } from '@/flows/com.horsecoder.market/VerifyStatusOfProductListingAndDelisting';
import marketFlowVerifyStatusOfProductListingAndDelisting from '@/flows/com.horsecoder.market/VerifyStatusOfProductListingAndDelisting/flow.json';
import { flowBatchCreationOfModelFilesFacade as modelFlowBatchCreationOfModelFilesFacade } from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles';
import modelFlowBatchCreationOfModelFiles from '@/flows/com.horsecoder.model/BatchCreationOfModelFiles/flow.json';
import { flowBatchUnlockAllLockedModelsForUsersFacade as modelFlowBatchUnlockAllLockedModelsForUsersFacade } from '@/flows/com.horsecoder.model/BatchUnlockAllLockedModelsForUsers';
import modelFlowBatchUnlockAllLockedModelsForUsers from '@/flows/com.horsecoder.model/BatchUnlockAllLockedModelsForUsers/flow.json';
import { flowCreateModelFacade as modelFlowCreateModelFacade } from '@/flows/com.horsecoder.model/CreateModel';
import modelFlowCreateModel from '@/flows/com.horsecoder.model/CreateModel/flow.json';
import { flowCreateModelsAndProductsFacade as modelFlowCreateModelsAndProductsFacade } from '@/flows/com.horsecoder.model/CreateModelsAndProducts';
import modelFlowCreateModelsAndProducts from '@/flows/com.horsecoder.model/CreateModelsAndProducts/flow.json';
import { flowCreateModelJsonBasedOnUrlFacade as modelFlowCreateModelJsonBasedOnUrlFacade } from '@/flows/com.horsecoder.model/CreateModelJsonBasedOnUrl';
import modelFlowCreateModelJsonBasedOnUrl from '@/flows/com.horsecoder.model/CreateModelJsonBasedOnUrl/flow.json';
import { flowDownloadModelFacade as modelFlowDownloadModelFacade } from '@/flows/com.horsecoder.model/DownloadModel';
import modelFlowDownloadModel from '@/flows/com.horsecoder.model/DownloadModel/flow.json';
import { flowFilterListOfModelFilesBasedOnCriteriaFacade as modelFlowFilterListOfModelFilesBasedOnCriteriaFacade } from '@/flows/com.horsecoder.model/FilterListOfModelFilesBasedOnCriteria';
import modelFlowFilterListOfModelFilesBasedOnCriteria from '@/flows/com.horsecoder.model/FilterListOfModelFilesBasedOnCriteria/flow.json';
import { flowFilterModelDetailsFacade as modelFlowFilterModelDetailsFacade } from '@/flows/com.horsecoder.model/FilterModelDetails';
import modelFlowFilterModelDetails from '@/flows/com.horsecoder.model/FilterModelDetails/flow.json';
import { flowJoinModelProjectAccordingInvitationLinkFacade as modelFlowJoinModelProjectAccordingInvitationLinkFacade } from '@/flows/com.horsecoder.model/JoinModelProjectAccordingInvitationLink';
import modelFlowJoinModelProjectAccordingInvitationLink from '@/flows/com.horsecoder.model/JoinModelProjectAccordingInvitationLink/flow.json';
import { flowNewModelJsonFacade as modelFlowNewModelJsonFacade } from '@/flows/com.horsecoder.model/NewModelJson';
import modelFlowNewModelJson from '@/flows/com.horsecoder.model/NewModelJson/flow.json';
import { flowObtainModelIdBasedOnProjectIdFacade as modelFlowObtainModelIdBasedOnProjectIdFacade } from '@/flows/com.horsecoder.model/ObtainModelIdBasedOnProjectId';
import modelFlowObtainModelIdBasedOnProjectId from '@/flows/com.horsecoder.model/ObtainModelIdBasedOnProjectId/flow.json';
import { flowTranslateFacade as modelFlowTranslateFacade } from '@/flows/com.horsecoder.model/Translate';
import modelFlowTranslate from '@/flows/com.horsecoder.model/Translate/flow.json';
import { flowUpdateModelSpaceFacade as modelFlowUpdateModelSpaceFacade } from '@/flows/com.horsecoder.model/UpdateModelSpace';
import modelFlowUpdateModelSpace from '@/flows/com.horsecoder.model/UpdateModelSpace/flow.json';
import { flowBatchDownloadExecutionDiagramFacade as taskSchedulingFlowBatchDownloadExecutionDiagramFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/BatchDownloadExecutionDiagram';
import taskSchedulingFlowBatchDownloadExecutionDiagram from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/BatchDownloadExecutionDiagram/flow.json';
import { flowCallOCRIntelligentAgentFacade as taskSchedulingFlowCallOCRIntelligentAgentFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/CallOCRIntelligentAgent';
import taskSchedulingFlowCallOCRIntelligentAgent from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/CallOCRIntelligentAgent/flow.json';
import { flowCancelTaskFacade as taskSchedulingFlowCancelTaskFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/CancelTask';
import taskSchedulingFlowCancelTask from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/CancelTask/flow.json';
import { flowDownloadExecutionDiagramFacade as taskSchedulingFlowDownloadExecutionDiagramFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/DownloadExecutionDiagram';
import taskSchedulingFlowDownloadExecutionDiagram from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/DownloadExecutionDiagram/flow.json';
import { flowGetTbotFlowInformationListFacade as taskSchedulingFlowGetTbotFlowInformationListFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/GetTbotFlowInformationList';
import taskSchedulingFlowGetTbotFlowInformationList from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/GetTbotFlowInformationList/flow.json';
import { flowIntelligentAgentPlanningFacade as taskSchedulingFlowIntelligentAgentPlanningFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/IntelligentAgentPlanning';
import taskSchedulingFlowIntelligentAgentPlanning from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/IntelligentAgentPlanning/flow.json';
import { flowOpenTaskFacade as taskSchedulingFlowOpenTaskFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask';
import taskSchedulingFlowOpenTask from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/OpenTask/flow.json';
import { flowQueryDataBasedOnIdListFacade as taskSchedulingFlowQueryDataBasedOnIdListFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryDataBasedOnIdList';
import taskSchedulingFlowQueryDataBasedOnIdList from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryDataBasedOnIdList/flow.json';
import { flowQueryExecutionStatusBasedOnTaskIdFacade as taskSchedulingFlowQueryExecutionStatusBasedOnTaskIdFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryExecutionStatusBasedOnTaskId';
import taskSchedulingFlowQueryExecutionStatusBasedOnTaskId from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryExecutionStatusBasedOnTaskId/flow.json';
import { flowQueryFileListBasedOnTaskListFacade as taskSchedulingFlowQueryFileListBasedOnTaskListFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryFileListBasedOnTaskList';
import taskSchedulingFlowQueryFileListBasedOnTaskList from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryFileListBasedOnTaskList/flow.json';
import { flowQueryTasksCurrentlyBeingExecutedByUserFacade as taskSchedulingFlowQueryTasksCurrentlyBeingExecutedByUserFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryTasksCurrentlyBeingExecutedByUser';
import taskSchedulingFlowQueryTasksCurrentlyBeingExecutedByUser from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/QueryTasksCurrentlyBeingExecutedByUser/flow.json';
import { flowRemoveIntelligentAgentsFromShelvesFacade as taskSchedulingFlowRemoveIntelligentAgentsFromShelvesFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RemoveIntelligentAgentsFromShelves';
import taskSchedulingFlowRemoveIntelligentAgentsFromShelves from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RemoveIntelligentAgentsFromShelves/flow.json';
import { flowRemoveIntelligentAgentGroupFromShelvesFacade as taskSchedulingFlowRemoveIntelligentAgentGroupFromShelvesFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RemoveIntelligentAgentGroupFromShelves';
import taskSchedulingFlowRemoveIntelligentAgentGroupFromShelves from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RemoveIntelligentAgentGroupFromShelves/flow.json';
import { flowRunningIntelligentAgentFacade as taskSchedulingFlowRunningIntelligentAgentFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RunningIntelligentAgent';
import taskSchedulingFlowRunningIntelligentAgent from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RunningIntelligentAgent/flow.json';
import { flowRunIntelligentAgentGroupFacade as taskSchedulingFlowRunIntelligentAgentGroupFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RunIntelligentAgentGroup';
import taskSchedulingFlowRunIntelligentAgentGroup from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/RunIntelligentAgentGroup/flow.json';
import { flowSchedulingFileParsingAgentsForSpecifiedFileTypesFacade as taskSchedulingFlowSchedulingFileParsingAgentsForSpecifiedFileTypesFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SchedulingFileParsingAgentsForSpecifiedFileTypes';
import taskSchedulingFlowSchedulingFileParsingAgentsForSpecifiedFileTypes from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SchedulingFileParsingAgentsForSpecifiedFileTypes/flow.json';
import { flowSigaoDownloadExecutionChartFacade as taskSchedulingFlowSigaoDownloadExecutionChartFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart';
import taskSchedulingFlowSigaoDownloadExecutionChart from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/SigaoDownloadExecutionChart/flow.json';
import { flowUnifiedSchedulingOfIntelligentAgentFacade as taskSchedulingFlowUnifiedSchedulingOfIntelligentAgentFacade } from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/UnifiedSchedulingOfIntelligentAgent';
import taskSchedulingFlowUnifiedSchedulingOfIntelligentAgent from '@/flows/cn.com.thingo.intelligentAgentPlatform.taskScheduling/UnifiedSchedulingOfIntelligentAgent/flow.json';
import { flowAccountRoleSettingsFacade as permissionFlowAccountRoleSettingsFacade } from '@/flows/com.horsecoder.platform.permission/AccountRoleSettings';
import permissionFlowAccountRoleSettings from '@/flows/com.horsecoder.platform.permission/AccountRoleSettings/flow.json';
import { flowAddAccountOrganizationPermissionsFacade as permissionFlowAddAccountOrganizationPermissionsFacade } from '@/flows/com.horsecoder.platform.permission/AddAccountOrganizationPermissions';
import permissionFlowAddAccountOrganizationPermissions from '@/flows/com.horsecoder.platform.permission/AddAccountOrganizationPermissions/flow.json';
import { flowAddAndBindPermissionsToOrganizeFacade as permissionFlowAddAndBindPermissionsToOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/AddAndBindPermissionsToOrganize';
import permissionFlowAddAndBindPermissionsToOrganize from '@/flows/com.horsecoder.platform.permission/AddAndBindPermissionsToOrganize/flow.json';
import { flowAddOrganizeFacade as permissionFlowAddOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/AddOrganize';
import permissionFlowAddOrganize from '@/flows/com.horsecoder.platform.permission/AddOrganize/flow.json';
import { flowAddOrganizeAccountPermissionFacade as permissionFlowAddOrganizeAccountPermissionFacade } from '@/flows/com.horsecoder.platform.permission/AddOrganizeAccountPermission';
import permissionFlowAddOrganizeAccountPermission from '@/flows/com.horsecoder.platform.permission/AddOrganizeAccountPermission/flow.json';
import { flowAddOrGetAccountFacade as permissionFlowAddOrGetAccountFacade } from '@/flows/com.horsecoder.platform.permission/AddOrGetAccount';
import permissionFlowAddOrGetAccount from '@/flows/com.horsecoder.platform.permission/AddOrGetAccount/flow.json';
import { flowAddPermissionsToTheOrganizeFacade as permissionFlowAddPermissionsToTheOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/AddPermissionsToTheOrganize';
import permissionFlowAddPermissionsToTheOrganize from '@/flows/com.horsecoder.platform.permission/AddPermissionsToTheOrganize/flow.json';
import { flowAddRolePermissionsFacade as permissionFlowAddRolePermissionsFacade } from '@/flows/com.horsecoder.platform.permission/AddRolePermissions';
import permissionFlowAddRolePermissions from '@/flows/com.horsecoder.platform.permission/AddRolePermissions/flow.json';
import { flowBatchAddOrganizeAndSpecifyAdministratorFacade as permissionFlowBatchAddOrganizeAndSpecifyAdministratorFacade } from '@/flows/com.horsecoder.platform.permission/BatchAddOrganizeAndSpecifyAdministrator';
import permissionFlowBatchAddOrganizeAndSpecifyAdministrator from '@/flows/com.horsecoder.platform.permission/BatchAddOrganizeAndSpecifyAdministrator/flow.json';
import { flowBatchBindOrganizeAccountsFacade as permissionFlowBatchBindOrganizeAccountsFacade } from '@/flows/com.horsecoder.platform.permission/BatchBindOrganizeAccounts';
import permissionFlowBatchBindOrganizeAccounts from '@/flows/com.horsecoder.platform.permission/BatchBindOrganizeAccounts/flow.json';
import { flowBatchObtainOrganizeInformationFacade as permissionFlowBatchObtainOrganizeInformationFacade } from '@/flows/com.horsecoder.platform.permission/BatchObtainOrganizeInformation';
import permissionFlowBatchObtainOrganizeInformation from '@/flows/com.horsecoder.platform.permission/BatchObtainOrganizeInformation/flow.json';
import { flowBatchRetrieveOrganizeDetailListFacade as permissionFlowBatchRetrieveOrganizeDetailListFacade } from '@/flows/com.horsecoder.platform.permission/BatchRetrieveOrganizeDetailList';
import permissionFlowBatchRetrieveOrganizeDetailList from '@/flows/com.horsecoder.platform.permission/BatchRetrieveOrganizeDetailList/flow.json';
import { flowBindOrganizeAccountFacade as permissionFlowBindOrganizeAccountFacade } from '@/flows/com.horsecoder.platform.permission/BindOrganizeAccount';
import permissionFlowBindOrganizeAccount from '@/flows/com.horsecoder.platform.permission/BindOrganizeAccount/flow.json';
import { flowBuildAnOrganizeTreeBasedOnOrganizeListFacade as permissionFlowBuildAnOrganizeTreeBasedOnOrganizeListFacade } from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList';
import permissionFlowBuildAnOrganizeTreeBasedOnOrganizeList from '@/flows/com.horsecoder.platform.permission/BuildAnOrganizeTreeBasedOnOrganizeList/flow.json';
import { flowCascadeDeleteOrganizeAccountFacade as permissionFlowCascadeDeleteOrganizeAccountFacade } from '@/flows/com.horsecoder.platform.permission/CascadeDeleteOrganizeAccount';
import permissionFlowCascadeDeleteOrganizeAccount from '@/flows/com.horsecoder.platform.permission/CascadeDeleteOrganizeAccount/flow.json';
import { flowCreateOrganizeAccountFacade as permissionFlowCreateOrganizeAccountFacade } from '@/flows/com.horsecoder.platform.permission/CreateOrganizeAccount';
import permissionFlowCreateOrganizeAccount from '@/flows/com.horsecoder.platform.permission/CreateOrganizeAccount/flow.json';
import { flowCreateRoleFacade as permissionFlowCreateRoleFacade } from '@/flows/com.horsecoder.platform.permission/CreateRole';
import permissionFlowCreateRole from '@/flows/com.horsecoder.platform.permission/CreateRole/flow.json';
import { flowCreateSubordinateOrganizeWithAdministratorFacade as permissionFlowCreateSubordinateOrganizeWithAdministratorFacade } from '@/flows/com.horsecoder.platform.permission/CreateSubordinateOrganizeWithAdministrator';
import permissionFlowCreateSubordinateOrganizeWithAdministrator from '@/flows/com.horsecoder.platform.permission/CreateSubordinateOrganizeWithAdministrator/flow.json';
import { flowDeleteAccountFacade as permissionFlowDeleteAccountFacade } from '@/flows/com.horsecoder.platform.permission/DeleteAccount';
import permissionFlowDeleteAccount from '@/flows/com.horsecoder.platform.permission/DeleteAccount/flow.json';
import { flowDeleteOrganizeAccountPermissionsFacade as permissionFlowDeleteOrganizeAccountPermissionsFacade } from '@/flows/com.horsecoder.platform.permission/DeleteOrganizeAccountPermissions';
import permissionFlowDeleteOrganizeAccountPermissions from '@/flows/com.horsecoder.platform.permission/DeleteOrganizeAccountPermissions/flow.json';
import { flowDeleteOrganizeInterfaceFacade as permissionFlowDeleteOrganizeInterfaceFacade } from '@/flows/com.horsecoder.platform.permission/DeleteOrganizeInterface';
import permissionFlowDeleteOrganizeInterface from '@/flows/com.horsecoder.platform.permission/DeleteOrganizeInterface/flow.json';
import { flowDeleteOrganizePermissionFacade as permissionFlowDeleteOrganizePermissionFacade } from '@/flows/com.horsecoder.platform.permission/DeleteOrganizePermission';
import permissionFlowDeleteOrganizePermission from '@/flows/com.horsecoder.platform.permission/DeleteOrganizePermission/flow.json';
import { flowDeleteRoleFacade as permissionFlowDeleteRoleFacade } from '@/flows/com.horsecoder.platform.permission/DeleteRole';
import permissionFlowDeleteRole from '@/flows/com.horsecoder.platform.permission/DeleteRole/flow.json';
import { flowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationFacade as permissionFlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationFacade } from '@/flows/com.horsecoder.platform.permission/DetermineWhetherTheRoleBelongsToTheCurrentOrganization';
import permissionFlowDetermineWhetherTheRoleBelongsToTheCurrentOrganization from '@/flows/com.horsecoder.platform.permission/DetermineWhetherTheRoleBelongsToTheCurrentOrganization/flow.json';
import { flowFilterAccountsListCanBoundToOrganizeFacade as permissionFlowFilterAccountsListCanBoundToOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize';
import permissionFlowFilterAccountsListCanBoundToOrganize from '@/flows/com.horsecoder.platform.permission/FilterAccountsListCanBoundToOrganize/flow.json';
import { flowFilterOrganizeListFacade as permissionFlowFilterOrganizeListFacade } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeList';
import permissionFlowFilterOrganizeList from '@/flows/com.horsecoder.platform.permission/FilterOrganizeList/flow.json';
import { flowFilterOrganizeTypeListBasedOnOrganizeTypeIdListFacade as permissionFlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListFacade } from '@/flows/com.horsecoder.platform.permission/FilterOrganizeTypeListBasedOnOrganizeTypeIdList';
import permissionFlowFilterOrganizeTypeListBasedOnOrganizeTypeIdList from '@/flows/com.horsecoder.platform.permission/FilterOrganizeTypeListBasedOnOrganizeTypeIdList/flow.json';
import { flowGetAllAccountsUnderOrganizeFacade as permissionFlowGetAllAccountsUnderOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/GetAllAccountsUnderOrganize';
import permissionFlowGetAllAccountsUnderOrganize from '@/flows/com.horsecoder.platform.permission/GetAllAccountsUnderOrganize/flow.json';
import { flowGetListOfAssignablePermissionsForOrganizeFacade as permissionFlowGetListOfAssignablePermissionsForOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/GetListOfAssignablePermissionsForOrganize';
import permissionFlowGetListOfAssignablePermissionsForOrganize from '@/flows/com.horsecoder.platform.permission/GetListOfAssignablePermissionsForOrganize/flow.json';
import { flowGetOrganizeAccountPermissionListFacade as permissionFlowGetOrganizeAccountPermissionListFacade } from '@/flows/com.horsecoder.platform.permission/GetOrganizeAccountPermissionList';
import permissionFlowGetOrganizeAccountPermissionList from '@/flows/com.horsecoder.platform.permission/GetOrganizeAccountPermissionList/flow.json';
import { flowGetOrganizeDetailsFacade as permissionFlowGetOrganizeDetailsFacade } from '@/flows/com.horsecoder.platform.permission/GetOrganizeDetails';
import permissionFlowGetOrganizeDetails from '@/flows/com.horsecoder.platform.permission/GetOrganizeDetails/flow.json';
import { flowGetOrganizeRolePermissionListFacade as permissionFlowGetOrganizeRolePermissionListFacade } from '@/flows/com.horsecoder.platform.permission/GetOrganizeRolePermissionList';
import permissionFlowGetOrganizeRolePermissionList from '@/flows/com.horsecoder.platform.permission/GetOrganizeRolePermissionList/flow.json';
import { flowGetOrganizeViewAndOrganizeListByDepthFacade as permissionFlowGetOrganizeViewAndOrganizeListByDepthFacade } from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth';
import permissionFlowGetOrganizeViewAndOrganizeListByDepth from '@/flows/com.horsecoder.platform.permission/GetOrganizeViewAndOrganizeListByDepth/flow.json';
import { flowListOfUnboundOrganizeAccountsFacade as permissionFlowListOfUnboundOrganizeAccountsFacade } from '@/flows/com.horsecoder.platform.permission/ListOfUnboundOrganizeAccounts';
import permissionFlowListOfUnboundOrganizeAccounts from '@/flows/com.horsecoder.platform.permission/ListOfUnboundOrganizeAccounts/flow.json';
import { flowNewOrganizationPermissionsFacade as permissionFlowNewOrganizationPermissionsFacade } from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions';
import permissionFlowNewOrganizationPermissions from '@/flows/com.horsecoder.platform.permission/NewOrganizationPermissions/flow.json';
import { flowNewSubordinateOrganizeFacade as permissionFlowNewSubordinateOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/NewSubordinateOrganize';
import permissionFlowNewSubordinateOrganize from '@/flows/com.horsecoder.platform.permission/NewSubordinateOrganize/flow.json';
import { flowObtainAccountOrganizationsOfSpecifiedTypeFacade as permissionFlowObtainAccountOrganizationsOfSpecifiedTypeFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationsOfSpecifiedType';
import permissionFlowObtainAccountOrganizationsOfSpecifiedType from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationsOfSpecifiedType/flow.json';
import { flowObtainAccountOrganizationConfigurationFacade as permissionFlowObtainAccountOrganizationConfigurationFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationConfiguration';
import permissionFlowObtainAccountOrganizationConfiguration from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationConfiguration/flow.json';
import { flowObtainAccountOrganizationPermissionsFacade as permissionFlowObtainAccountOrganizationPermissionsFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationPermissions';
import permissionFlowObtainAccountOrganizationPermissions from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationPermissions/flow.json';
import { flowObtainAccountOrganizationRolesFacade as permissionFlowObtainAccountOrganizationRolesFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationRoles';
import permissionFlowObtainAccountOrganizationRoles from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizationRoles/flow.json';
import { flowObtainAccountOrganizeViewAndOrganizeListByDepthFacade as permissionFlowObtainAccountOrganizeViewAndOrganizeListByDepthFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizeViewAndOrganizeListByDepth';
import permissionFlowObtainAccountOrganizeViewAndOrganizeListByDepth from '@/flows/com.horsecoder.platform.permission/ObtainAccountOrganizeViewAndOrganizeListByDepth/flow.json';
import { flowObtainAllPermissionsForTheRoleListFacade as permissionFlowObtainAllPermissionsForTheRoleListFacade } from '@/flows/com.horsecoder.platform.permission/ObtainAllPermissionsForTheRoleList';
import permissionFlowObtainAllPermissionsForTheRoleList from '@/flows/com.horsecoder.platform.permission/ObtainAllPermissionsForTheRoleList/flow.json';
import { flowObtainCandidateListOfOrganizeManagementAccountsFacade as permissionFlowObtainCandidateListOfOrganizeManagementAccountsFacade } from '@/flows/com.horsecoder.platform.permission/ObtainCandidateListOfOrganizeManagementAccounts';
import permissionFlowObtainCandidateListOfOrganizeManagementAccounts from '@/flows/com.horsecoder.platform.permission/ObtainCandidateListOfOrganizeManagementAccounts/flow.json';
import { flowObtainListOfAccountRolePermissionsFacade as permissionFlowObtainListOfAccountRolePermissionsFacade } from '@/flows/com.horsecoder.platform.permission/ObtainListOfAccountRolePermissions';
import permissionFlowObtainListOfAccountRolePermissions from '@/flows/com.horsecoder.platform.permission/ObtainListOfAccountRolePermissions/flow.json';
import { flowObtainOrganizeAccountAssignablePermissionsFacade as permissionFlowObtainOrganizeAccountAssignablePermissionsFacade } from '@/flows/com.horsecoder.platform.permission/ObtainOrganizeAccountAssignablePermissions';
import permissionFlowObtainOrganizeAccountAssignablePermissions from '@/flows/com.horsecoder.platform.permission/ObtainOrganizeAccountAssignablePermissions/flow.json';
import { flowObtainOrganizePermissionListFacade as permissionFlowObtainOrganizePermissionListFacade } from '@/flows/com.horsecoder.platform.permission/ObtainOrganizePermissionList';
import permissionFlowObtainOrganizePermissionList from '@/flows/com.horsecoder.platform.permission/ObtainOrganizePermissionList/flow.json';
import { flowObtainPermissionListBasedOnRoleIdFacade as permissionFlowObtainPermissionListBasedOnRoleIdFacade } from '@/flows/com.horsecoder.platform.permission/ObtainPermissionListBasedOnRoleId';
import permissionFlowObtainPermissionListBasedOnRoleId from '@/flows/com.horsecoder.platform.permission/ObtainPermissionListBasedOnRoleId/flow.json';
import { flowObtainPositiveAndNegativePermissionsForAccountFacade as permissionFlowObtainPositiveAndNegativePermissionsForAccountFacade } from '@/flows/com.horsecoder.platform.permission/ObtainPositiveAndNegativePermissionsForAccount';
import permissionFlowObtainPositiveAndNegativePermissionsForAccount from '@/flows/com.horsecoder.platform.permission/ObtainPositiveAndNegativePermissionsForAccount/flow.json';
import { flowQueryAccountBasedOnAccountIdFacade as permissionFlowQueryAccountBasedOnAccountIdFacade } from '@/flows/com.horsecoder.platform.permission/QueryAccountBasedOnAccountId';
import permissionFlowQueryAccountBasedOnAccountId from '@/flows/com.horsecoder.platform.permission/QueryAccountBasedOnAccountId/flow.json';
import { flowQueryListOfAccountsThatCanBeBoundARoleFacade as permissionFlowQueryListOfAccountsThatCanBeBoundARoleFacade } from '@/flows/com.horsecoder.platform.permission/QueryListOfAccountsThatCanBeBoundARole';
import permissionFlowQueryListOfAccountsThatCanBeBoundARole from '@/flows/com.horsecoder.platform.permission/QueryListOfAccountsThatCanBeBoundARole/flow.json';
import { flowRetrieveOrganizeViewAndOrganizeListDetailsByDepthFacade as permissionFlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthFacade } from '@/flows/com.horsecoder.platform.permission/RetrieveOrganizeViewAndOrganizeListDetailsByDepth';
import permissionFlowRetrieveOrganizeViewAndOrganizeListDetailsByDepth from '@/flows/com.horsecoder.platform.permission/RetrieveOrganizeViewAndOrganizeListDetailsByDepth/flow.json';
import { flowRetrieveRolePaginationDataFacade as permissionFlowRetrieveRolePaginationDataFacade } from '@/flows/com.horsecoder.platform.permission/RetrieveRolePaginationData';
import permissionFlowRetrieveRolePaginationData from '@/flows/com.horsecoder.platform.permission/RetrieveRolePaginationData/flow.json';
import { flowRoleBindingAccountFacade as permissionFlowRoleBindingAccountFacade } from '@/flows/com.horsecoder.platform.permission/RoleBindingAccount';
import permissionFlowRoleBindingAccount from '@/flows/com.horsecoder.platform.permission/RoleBindingAccount/flow.json';
import { flowTransferOrganizeAdministratorFacade as permissionFlowTransferOrganizeAdministratorFacade } from '@/flows/com.horsecoder.platform.permission/TransferOrganizeAdministrator';
import permissionFlowTransferOrganizeAdministrator from '@/flows/com.horsecoder.platform.permission/TransferOrganizeAdministrator/flow.json';
import { flowUpdateOrganizeInformationFacade as permissionFlowUpdateOrganizeInformationFacade } from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeInformation';
import permissionFlowUpdateOrganizeInformation from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeInformation/flow.json';
import { flowUpdateOrganizeParentOrganizeFacade as permissionFlowUpdateOrganizeParentOrganizeFacade } from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeParentOrganize';
import permissionFlowUpdateOrganizeParentOrganize from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeParentOrganize/flow.json';
import { flowUpdateOrganizeTypePermissionTemplatePermissionListFacade as permissionFlowUpdateOrganizeTypePermissionTemplatePermissionListFacade } from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeTypePermissionTemplatePermissionList';
import permissionFlowUpdateOrganizeTypePermissionTemplatePermissionList from '@/flows/com.horsecoder.platform.permission/UpdateOrganizeTypePermissionTemplatePermissionList/flow.json';
import { flowVerifyAccountAndOrganizationExistFacade as permissionFlowVerifyAccountAndOrganizationExistFacade } from '@/flows/com.horsecoder.platform.permission/VerifyAccountAndOrganizationExist';
import permissionFlowVerifyAccountAndOrganizationExist from '@/flows/com.horsecoder.platform.permission/VerifyAccountAndOrganizationExist/flow.json';
import { flowVerifyAccountExistsFacade as permissionFlowVerifyAccountExistsFacade } from '@/flows/com.horsecoder.platform.permission/VerifyAccountExists';
import permissionFlowVerifyAccountExists from '@/flows/com.horsecoder.platform.permission/VerifyAccountExists/flow.json';
import { flowVerifyOrganizationExistsFacade as permissionFlowVerifyOrganizationExistsFacade } from '@/flows/com.horsecoder.platform.permission/VerifyOrganizationExists';
import permissionFlowVerifyOrganizationExists from '@/flows/com.horsecoder.platform.permission/VerifyOrganizationExists/flow.json';
import { flowUploadStringFileFacade as storageFlowUploadStringFileFacade } from '@/flows/com.horsecoder.storage/UploadStringFile';
import storageFlowUploadStringFile from '@/flows/com.horsecoder.storage/UploadStringFile/flow.json';
import { flowStreamingFileUploadFacade as storageFlowStreamingFileUploadFacade } from '@/flows/com.horsecoder.storage/StreamingFileUpload';
import storageFlowStreamingFileUpload from '@/flows/com.horsecoder.storage/StreamingFileUpload/flow.json';
import { flowGetUrlFileTypeFacade as storageFlowGetUrlFileTypeFacade } from '@/flows/com.horsecoder.storage/GetUrlFileType';
import storageFlowGetUrlFileType from '@/flows/com.horsecoder.storage/GetUrlFileType/flow.json';
import { flowGetFileTypeFacade as storageFlowGetFileTypeFacade } from '@/flows/com.horsecoder.storage/GetFileType';
import storageFlowGetFileType from '@/flows/com.horsecoder.storage/GetFileType/flow.json';
import { flowFileUploadStreamFacade as storageFlowFileUploadStreamFacade } from '@/flows/com.horsecoder.storage/FileUploadStream';
import storageFlowFileUploadStream from '@/flows/com.horsecoder.storage/FileUploadStream/flow.json';
import { flowUploadFileFacade as storageFlowUploadFileFacade } from '@/flows/com.horsecoder.storage/UploadFile';
import storageFlowUploadFile from '@/flows/com.horsecoder.storage/UploadFile/flow.json';
import { flowDownloadFileFacade as storageFlowDownloadFileFacade } from '@/flows/com.horsecoder.storage/DownloadFile';
import storageFlowDownloadFile from '@/flows/com.horsecoder.storage/DownloadFile/flow.json';
import { flowUploadFileWithVerbFacade as storageFlowUploadFileWithVerbFacade } from '@/flows/com.horsecoder.storage/UploadFileWithVerb';
import storageFlowUploadFileWithVerb from '@/flows/com.horsecoder.storage/UploadFileWithVerb/flow.json';
import { flowBatchUploadFilesWithVerbFacade as storageFlowBatchUploadFilesWithVerbFacade } from '@/flows/com.horsecoder.storage/BatchUploadFilesWithVerb';
import storageFlowBatchUploadFilesWithVerb from '@/flows/com.horsecoder.storage/BatchUploadFilesWithVerb/flow.json';
import { flowBatchCreateRepositoriesOnGitFacade as demandFlowBatchCreateRepositoriesOnGitFacade } from '@/flows/com.horsecoder.demand/BatchCreateRepositoriesOnGit';
import demandFlowBatchCreateRepositoriesOnGit from '@/flows/com.horsecoder.demand/BatchCreateRepositoriesOnGit/flow.json';
import { flowBatchObtainUserGitStatusFacade as demandFlowBatchObtainUserGitStatusFacade } from '@/flows/com.horsecoder.demand/BatchObtainUserGitStatus';
import demandFlowBatchObtainUserGitStatus from '@/flows/com.horsecoder.demand/BatchObtainUserGitStatus/flow.json';
import { flowCreateGitUserFacade as demandFlowCreateGitUserFacade } from '@/flows/com.horsecoder.demand/CreateGitUser';
import demandFlowCreateGitUser from '@/flows/com.horsecoder.demand/CreateGitUser/flow.json';
import { flowCreateProjectFacade as demandFlowCreateProjectFacade } from '@/flows/com.horsecoder.demand/CreateProject';
import demandFlowCreateProject from '@/flows/com.horsecoder.demand/CreateProject/flow.json';
import { flowCreateRepositoryOnGitFacade as demandFlowCreateRepositoryOnGitFacade } from '@/flows/com.horsecoder.demand/CreateRepositoryOnGit';
import demandFlowCreateRepositoryOnGit from '@/flows/com.horsecoder.demand/CreateRepositoryOnGit/flow.json';
import { flowDeleteGitUserFacade as demandFlowDeleteGitUserFacade } from '@/flows/com.horsecoder.demand/DeleteGitUser';
import demandFlowDeleteGitUser from '@/flows/com.horsecoder.demand/DeleteGitUser/flow.json';
import { flowDisableGitUserFacade as demandFlowDisableGitUserFacade } from '@/flows/com.horsecoder.demand/DisableGitUser';
import demandFlowDisableGitUser from '@/flows/com.horsecoder.demand/DisableGitUser/flow.json';
import { flowOpeningGitWarehousePermissionsFacade as demandFlowOpeningGitWarehousePermissionsFacade } from '@/flows/com.horsecoder.demand/OpeningGitWarehousePermissions';
import demandFlowOpeningGitWarehousePermissions from '@/flows/com.horsecoder.demand/OpeningGitWarehousePermissions/flow.json';
import { flowOpenGitRepositoryPermissionsForAllProjectsInSpaceFacade as demandFlowOpenGitRepositoryPermissionsForAllProjectsInSpaceFacade } from '@/flows/com.horsecoder.demand/OpenGitRepositoryPermissionsForAllProjectsInSpace';
import demandFlowOpenGitRepositoryPermissionsForAllProjectsInSpace from '@/flows/com.horsecoder.demand/OpenGitRepositoryPermissionsForAllProjectsInSpace/flow.json';
import { flowUnlockGitUsersFacade as demandFlowUnlockGitUsersFacade } from '@/flows/com.horsecoder.demand/UnlockGitUsers';
import demandFlowUnlockGitUsers from '@/flows/com.horsecoder.demand/UnlockGitUsers/flow.json';
import LeftComponentOnClickOpenSettingsPanelFlowOnClickOpenSettingsPanel from '@/components/LeftComponent/flows/OnClickOpenSettingsPanel/flow.json';
import { flowCodeOnClickOpenSettingsPanel as LeftComponentOnClickOpenSettingsPanelFlowCodeOnClickOpenSettingsPanel } from '@/components/LeftComponent/flows/OnClickOpenSettingsPanel/codes/FlowCodeOnClickOpenSettingsPanel';
import LeftComponentOnClickExpandSettingsPanelFlowOnClickExpandSettingsPanel from '@/components/LeftComponent/flows/OnClickExpandSettingsPanel/flow.json';
import { flowCodeOnClickExpandSettingsPanel as LeftComponentOnClickExpandSettingsPanelFlowCodeOnClickExpandSettingsPanel } from '@/components/LeftComponent/flows/OnClickExpandSettingsPanel/codes/FlowCodeOnClickExpandSettingsPanel';
import OrderSelectOnClickContinuePaymentForUnfinishedOrdersFlowOnClickContinuePaymentForUnfinishedOrders from '@/components/OrderSelect/flows/OnClickContinuePaymentForUnfinishedOrders/flow.json';
import { flowCodeOnClickContinuePaymentForUnfinishedOrders as OrderSelectOnClickContinuePaymentForUnfinishedOrdersFlowCodeOnClickContinuePaymentForUnfinishedOrders } from '@/components/OrderSelect/flows/OnClickContinuePaymentForUnfinishedOrders/codes/FlowCodeOnClickContinuePaymentForUnfinishedOrders';
import PaymentOnInitializeWeChatPayOrderFlowOnInitializeWeChatPayOrder from '@/xpages/Payment/flows/OnInitializeWeChatPayOrder/flow.json';
import { flowCodeOnInitializeWeChatPayOrder as PaymentOnInitializeWeChatPayOrderFlowCodeOnInitializeWeChatPayOrder } from '@/xpages/Payment/flows/OnInitializeWeChatPayOrder/codes/FlowCodeOnInitializeWeChatPayOrder';
import { flowCodeInitializePaymentOrderData as PaymentOnInitializeWeChatPayOrderFlowCodeInitializePaymentOrderData } from '@/xpages/Payment/flows/OnInitializeWeChatPayOrder/codes/FlowCodeInitializePaymentOrderData';
import PaymentOnInitializeOrderCardBasedOnOrderNumberFlowOnInitializeOrderCardBasedOnOrderNumber from '@/xpages/Payment/flows/OnInitializeOrderCardBasedOnOrderNumber/flow.json';
import { flowCodeOnInitializeOrderCardBasedOnOrderNumber as PaymentOnInitializeOrderCardBasedOnOrderNumberFlowCodeOnInitializeOrderCardBasedOnOrderNumber } from '@/xpages/Payment/flows/OnInitializeOrderCardBasedOnOrderNumber/codes/FlowCodeOnInitializeOrderCardBasedOnOrderNumber';
import OrderSelectOnClickCancelOrderFlowOnClickCancelOrder from '@/components/OrderSelect/flows/OnClickCancelOrder/flow.json';
import { flowCodeOnClickCancelOrder as OrderSelectOnClickCancelOrderFlowCodeOnClickCancelOrder } from '@/components/OrderSelect/flows/OnClickCancelOrder/codes/FlowCodeOnClickCancelOrder';
import { flowCodeVerifyCancellationProcessingResultOfOrder as OrderSelectOnClickCancelOrderFlowCodeVerifyCancellationProcessingResultOfOrder } from '@/components/OrderSelect/flows/OnClickCancelOrder/codes/FlowCodeVerifyCancellationProcessingResultOfOrder';
import { flowCodeDisableOrderPromptVisibleControl as OrderSelectOnClickCancelOrderFlowCodeDisableOrderPromptVisibleControl } from '@/components/OrderSelect/flows/OnClickCancelOrder/codes/FlowCodeDisableOrderPromptVisibleControl';
import OrderSelectOnInitializeOrderSelectPageFlowOnInitializeOrderSelectPage from '@/components/OrderSelect/flows/OnInitializeOrderSelectPage/flow.json';
import { flowCodeOnInitializeOrderSelectPage as OrderSelectOnInitializeOrderSelectPageFlowCodeOnInitializeOrderSelectPage } from '@/components/OrderSelect/flows/OnInitializeOrderSelectPage/codes/FlowCodeOnInitializeOrderSelectPage';
import { flowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResults as OrderSelectOnInitializeOrderSelectPageFlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResults } from '@/components/OrderSelect/flows/OnInitializeOrderSelectPage/codes/FlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResults';
import OrderSelectOnCreatePaymentOrderFlowOnCreatePaymentOrder from '@/components/OrderSelect/flows/OnCreatePaymentOrder/flow.json';
import { flowCodeFrontEndCreatesPaymentOrders as OrderSelectOnCreatePaymentOrderFlowCodeFrontEndCreatesPaymentOrders } from '@/components/OrderSelect/flows/OnCreatePaymentOrder/codes/FlowCodeFrontEndCreatesPaymentOrders';
import { flowCodeJumpDirectPaymentPage as OrderSelectOnCreatePaymentOrderFlowCodeJumpDirectPaymentPage } from '@/components/OrderSelect/flows/OnCreatePaymentOrder/codes/FlowCodeJumpDirectPaymentPage';
import LeftComponentOnClickOpenPromotionalActivitiesFlowOnClickOpenPromotionalActivities from '@/components/LeftComponent/flows/OnClickOpenPromotionalActivities/flow.json';
import { flowCodeDetermineUserMembershipStatus as LeftComponentOnClickOpenPromotionalActivitiesFlowCodeDetermineUserMembershipStatus } from '@/components/LeftComponent/flows/OnClickOpenPromotionalActivities/codes/FlowCodeDetermineUserMembershipStatus';
import { flowCodeOnClickOpenPromotionalActivities as LeftComponentOnClickOpenPromotionalActivitiesFlowCodeOnClickOpenPromotionalActivities } from '@/components/LeftComponent/flows/OnClickOpenPromotionalActivities/codes/FlowCodeOnClickOpenPromotionalActivities';
import PaymentOnClickCancelPaymentFlowOnClickCancelPayment from '@/xpages/Payment/flows/OnClickCancelPayment/flow.json';
import { flowCodeOnClickCancelPayment as PaymentOnClickCancelPaymentFlowCodeOnClickCancelPayment } from '@/xpages/Payment/flows/OnClickCancelPayment/codes/FlowCodeOnClickCancelPayment';
import PaymentOnPaymentCallbackCompletedSeriousIllnessDirectedURLFlowOnPaymentCallbackCompletedSeriousIllnessDirectedURL from '@/xpages/Payment/flows/OnPaymentCallbackCompletedSeriousIllnessDirectedURL/flow.json';
import { flowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURL as PaymentOnPaymentCallbackCompletedSeriousIllnessDirectedURLFlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURL } from '@/xpages/Payment/flows/OnPaymentCallbackCompletedSeriousIllnessDirectedURL/codes/FlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURL';
import LogInOnClickOnSMSVerificationCodeLogInFlowOnClickOnSMSVerificationCodeLogIn from '@/xpages/LogIn/flows/OnClickOnSMSVerificationCodeLogIn/flow.json';
import { flowCodeOnClickOnSMSVerificationCodeLogIn as LogInOnClickOnSMSVerificationCodeLogInFlowCodeOnClickOnSMSVerificationCodeLogIn } from '@/xpages/LogIn/flows/OnClickOnSMSVerificationCodeLogIn/codes/FlowCodeOnClickOnSMSVerificationCodeLogIn';
import { flowCodeProcessLoginInformationObtainUserId as LogInOnClickOnSMSVerificationCodeLogInFlowCodeProcessLoginInformationObtainUserId } from '@/xpages/LogIn/flows/OnClickOnSMSVerificationCodeLogIn/codes/FlowCodeProcessLoginInformationObtainUserId';
import { flowCodeSetUserInformationAndRedirectHomepage as LogInOnClickOnSMSVerificationCodeLogInFlowCodeSetUserInformationAndRedirectHomepage } from '@/xpages/LogIn/flows/OnClickOnSMSVerificationCodeLogIn/codes/FlowCodeSetUserInformationAndRedirectHomepage';
import EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowOnInitializeLoginUserAndWebsocketConnection from '@/layouts/EmptyLayout/flows/OnInitializeLoginUserAndWebsocketConnection/flow.json';
import { flowCodeObtainUserken as EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeObtainUserken } from '@/layouts/EmptyLayout/flows/OnInitializeLoginUserAndWebsocketConnection/codes/FlowCodeObtainUserken';
import { flowCodeGetLoggedInUsers as EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeGetLoggedInUsers } from '@/layouts/EmptyLayout/flows/OnInitializeLoginUserAndWebsocketConnection/codes/FlowCodeGetLoggedInUsers';
import { flowCodeInitializeWebsocketConnection as EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeInitializeWebsocketConnection } from '@/layouts/EmptyLayout/flows/OnInitializeLoginUserAndWebsocketConnection/codes/FlowCodeInitializeWebsocketConnection';
import { flowCodeSetMembershipType as EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeSetMembershipType } from '@/layouts/EmptyLayout/flows/OnInitializeLoginUserAndWebsocketConnection/codes/FlowCodeSetMembershipType';
import EmptyLayoutOnInitializeMembershipStatusFlowOnInitializeMembershipStatus from '@/layouts/EmptyLayout/flows/OnInitializeMembershipStatus/flow.json';
import { flowCodeOnInitializeMembershipStatus as EmptyLayoutOnInitializeMembershipStatusFlowCodeOnInitializeMembershipStatus } from '@/layouts/EmptyLayout/flows/OnInitializeMembershipStatus/codes/FlowCodeOnInitializeMembershipStatus';
import { flowCodeSetMembershipTypeData as EmptyLayoutOnInitializeMembershipStatusFlowCodeSetMembershipTypeData } from '@/layouts/EmptyLayout/flows/OnInitializeMembershipStatus/codes/FlowCodeSetMembershipTypeData';
import PaymentOnClickAlipayPaymentButtonFlowOnClickAlipayPaymentButton from '@/xpages/Payment/flows/OnClickAlipayPaymentButton/flow.json';
import { flowCodeOnClickAlipayPaymentButton as PaymentOnClickAlipayPaymentButtonFlowCodeOnClickAlipayPaymentButton } from '@/xpages/Payment/flows/OnClickAlipayPaymentButton/codes/FlowCodeOnClickAlipayPaymentButton';
import { flowCodeEnableVisibleControlOfPaymentQRCode as PaymentOnClickAlipayPaymentButtonFlowCodeEnableVisibleControlOfPaymentQRCode } from '@/xpages/Payment/flows/OnClickAlipayPaymentButton/codes/FlowCodeEnableVisibleControlOfPaymentQRCode';
import PaymentOnClickOnWeChatPayFlowOnClickOnWeChatPay from '@/xpages/Payment/flows/OnClickOnWeChatPay/flow.json';
import { flowCodeOnClickOnWeChatPay as PaymentOnClickOnWeChatPayFlowCodeOnClickOnWeChatPay } from '@/xpages/Payment/flows/OnClickOnWeChatPay/codes/FlowCodeOnClickOnWeChatPay';
import { flowCodeEnableVisibleControlOfPaymentQRCode as PaymentOnClickOnWeChatPayFlowCodeEnableVisibleControlOfPaymentQRCode } from '@/xpages/Payment/flows/OnClickOnWeChatPay/codes/FlowCodeEnableVisibleControlOfPaymentQRCode';
import OrderSelectOnClickJumpPaymentPageFlowOnClickJumpPaymentPage from '@/components/OrderSelect/flows/OnClickJumpPaymentPage/flow.json';
import { flowCodeVerifyUserTypeAndCreateOrder as OrderSelectOnClickJumpPaymentPageFlowCodeVerifyUserTypeAndCreateOrder } from '@/components/OrderSelect/flows/OnClickJumpPaymentPage/codes/FlowCodeVerifyUserTypeAndCreateOrder';
import { flowCodeJumpPaymentPage as OrderSelectOnClickJumpPaymentPageFlowCodeJumpPaymentPage } from '@/components/OrderSelect/flows/OnClickJumpPaymentPage/codes/FlowCodeJumpPaymentPage';
import LogInOnClickOnAccountLoginFlowOnClickOnAccountLogin from '@/xpages/LogIn/flows/OnClickOnAccountLogin/flow.json';
import { flowCodeOnClickOnAccountLogin as LogInOnClickOnAccountLoginFlowCodeOnClickOnAccountLogin } from '@/xpages/LogIn/flows/OnClickOnAccountLogin/codes/FlowCodeOnClickOnAccountLogin';
import { flowCodeReturnInformationAfterProcessingLogin as LogInOnClickOnAccountLoginFlowCodeReturnInformationAfterProcessingLogin } from '@/xpages/LogIn/flows/OnClickOnAccountLogin/codes/FlowCodeReturnInformationAfterProcessingLogin';
import { flowCodeLoginSuccessfulRedirectHomepage as LogInOnClickOnAccountLoginFlowCodeLoginSuccessfulRedirectHomepage } from '@/xpages/LogIn/flows/OnClickOnAccountLogin/codes/FlowCodeLoginSuccessfulRedirectHomepage';
import OrderSelectOnClickDisplayEnterprisePackageFlowOnClickDisplayEnterprisePackage from '@/components/OrderSelect/flows/OnClickDisplayEnterprisePackage/flow.json';
import { flowCodeOnClickDisplayEnterprisePackage as OrderSelectOnClickDisplayEnterprisePackageFlowCodeOnClickDisplayEnterprisePackage } from '@/components/OrderSelect/flows/OnClickDisplayEnterprisePackage/codes/FlowCodeOnClickDisplayEnterprisePackage';
import OrderSelectOnClickDisplayPersonalPackageFlowOnClickDisplayPersonalPackage from '@/components/OrderSelect/flows/OnClickDisplayPersonalPackage/flow.json';
import { flowCodeOnClickDisplayPersonalPackage as OrderSelectOnClickDisplayPersonalPackageFlowCodeOnClickDisplayPersonalPackage } from '@/components/OrderSelect/flows/OnClickDisplayPersonalPackage/codes/FlowCodeOnClickDisplayPersonalPackage';
import OrderSelectOnClickOnAllPackageButtonFlowOnClickOnAllPackageButton from '@/components/OrderSelect/flows/OnClickOnAllPackageButton/flow.json';
import { flowCodeOnClickOnAllPackageButton as OrderSelectOnClickOnAllPackageButtonFlowCodeOnClickOnAllPackageButton } from '@/components/OrderSelect/flows/OnClickOnAllPackageButton/codes/FlowCodeOnClickOnAllPackageButton';
import PaymentOnClickReturnFlowOnClickReturn from '@/xpages/Payment/flows/OnClickReturn/flow.json';
import { flowCodeOnClickReturn as PaymentOnClickReturnFlowCodeOnClickReturn } from '@/xpages/Payment/flows/OnClickReturn/codes/FlowCodeOnClickReturn';
import RightpMenuOnClickSwitchDataButtonFlowOnClickSwitchDataButton from '@/components/RightpMenu/flows/OnClickSwitchDataButton/flow.json';
import { flowCodeOnClickSwitchDataButton as RightpMenuOnClickSwitchDataButtonFlowCodeOnClickSwitchDataButton } from '@/components/RightpMenu/flows/OnClickSwitchDataButton/codes/FlowCodeOnClickSwitchDataButton';
import PanelOnDetermineDisplayComponentBasedOnActiveSubPanelsFlowOnDetermineDisplayComponentBasedOnActiveSubPanels from '@/components/Panel/flows/OnDetermineDisplayComponentBasedOnActiveSubPanels/flow.json';
import { flowCodeOnDetermineDisplayComponentBasedOnActiveSubPanels as PanelOnDetermineDisplayComponentBasedOnActiveSubPanelsFlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanels } from '@/components/Panel/flows/OnDetermineDisplayComponentBasedOnActiveSubPanels/codes/FlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanels';
import RightpMenuOnClickOpenIntelligentAgentPanelFlowOnClickOpenIntelligentAgentPanel from '@/components/RightpMenu/flows/OnClickOpenIntelligentAgentPanel/flow.json';
import { flowCodeOnClickOpenIntelligentAgentPanel as RightpMenuOnClickOpenIntelligentAgentPanelFlowCodeOnClickOpenIntelligentAgentPanel } from '@/components/RightpMenu/flows/OnClickOpenIntelligentAgentPanel/codes/FlowCodeOnClickOpenIntelligentAgentPanel';
import TaskListOnInitializeTaskFlowOnInitializeTask from '@/components/TaskList/flows/OnInitializeTask/flow.json';
import { flowCodeOnInitializeTask as TaskListOnInitializeTaskFlowCodeOnInitializeTask } from '@/components/TaskList/flows/OnInitializeTask/codes/FlowCodeOnInitializeTask';
import IntelligentAgentSelectComponentOnInitializeIntelligentAgentListFlowOnInitializeIntelligentAgentList from '@/components/IntelligentAgentSelectComponent/flows/OnInitializeIntelligentAgentList/flow.json';
import { flowCodeOnInitializeIntelligentAgentList as IntelligentAgentSelectComponentOnInitializeIntelligentAgentListFlowCodeOnInitializeIntelligentAgentList } from '@/components/IntelligentAgentSelectComponent/flows/OnInitializeIntelligentAgentList/codes/FlowCodeOnInitializeIntelligentAgentList';
import DialogueOnClickOpenPaymentModalFlowOnClickOpenPaymentModal from '@/components/Dialogue/flows/OnClickOpenPaymentModal/flow.json';
import { flowCodeOpenUpgradePlanVisible as DialogueOnClickOpenPaymentModalFlowCodeOpenUpgradePlanVisible } from '@/components/Dialogue/flows/OnClickOpenPaymentModal/codes/FlowCodeOpenUpgradePlanVisible';
import MainOnUpgradePlanCancelFlowOnUpgradePlanCancel from '@/xpages/Main/flows/OnUpgradePlanCancel/flow.json';
import { flowCodeCloseUpgradePlanVisible as MainOnUpgradePlanCancelFlowCodeCloseUpgradePlanVisible } from '@/xpages/Main/flows/OnUpgradePlanCancel/codes/FlowCodeCloseUpgradePlanVisible';
import ScanedOnGetVerificationCodeFlowOnGetVerificationCode from '@/xpages/Scaned/flows/OnGetVerificationCode/flow.json';
import { flowCodeVerifyFormAndObtainPhoneNumber as ScanedOnGetVerificationCodeFlowCodeVerifyFormAndObtainPhoneNumber } from '@/xpages/Scaned/flows/OnGetVerificationCode/codes/FlowCodeVerifyFormAndObtainPhoneNumber';
import { flowCodeSetTimerAndButtonStatus as ScanedOnGetVerificationCodeFlowCodeSetTimerAndButtonStatus } from '@/xpages/Scaned/flows/OnGetVerificationCode/codes/FlowCodeSetTimerAndButtonStatus';
import LogInOnObtainSMSVerificationCodeFlowOnObtainSMSVerificationCode from '@/xpages/LogIn/flows/OnObtainSMSVerificationCode/flow.json';
import { flowCodeOnObtainSMSVerificationCode as LogInOnObtainSMSVerificationCodeFlowCodeOnObtainSMSVerificationCode } from '@/xpages/LogIn/flows/OnObtainSMSVerificationCode/codes/FlowCodeOnObtainSMSVerificationCode';
import { flowCodeSetVerificationCodeButtonCountdownAndClickable as LogInOnObtainSMSVerificationCodeFlowCodeSetVerificationCodeButtonCountdownAndClickable } from '@/xpages/LogIn/flows/OnObtainSMSVerificationCode/codes/FlowCodeSetVerificationCodeButtonCountdownAndClickable';
import RegisterOnSendMobileVerificationCodeFlowOnSendMobileVerificationCode from '@/xpages/Register/flows/OnSendMobileVerificationCode/flow.json';
import { flowCodeOnSendMobileVerificationCode as RegisterOnSendMobileVerificationCodeFlowCodeOnSendMobileVerificationCode } from '@/xpages/Register/flows/OnSendMobileVerificationCode/codes/FlowCodeOnSendMobileVerificationCode';
import { flowCodeSetCountdown as RegisterOnSendMobileVerificationCodeFlowCodeSetCountdown } from '@/xpages/Register/flows/OnSendMobileVerificationCode/codes/FlowCodeSetCountdown';
import LogInOnRefreshGraphicCaptchaFlowOnRefreshGraphicCaptcha from '@/xpages/LogIn/flows/OnRefreshGraphicCaptcha/flow.json';
import { flowCodeSetGraphicCaptchaBaseImage as LogInOnRefreshGraphicCaptchaFlowCodeSetGraphicCaptchaBaseImage } from '@/xpages/LogIn/flows/OnRefreshGraphicCaptcha/codes/FlowCodeSetGraphicCaptchaBaseImage';
import { flowCodeSetGraphicCaptchaText as LogInOnRefreshGraphicCaptchaFlowCodeSetGraphicCaptchaText } from '@/xpages/LogIn/flows/OnRefreshGraphicCaptcha/codes/FlowCodeSetGraphicCaptchaText';
import { flowCodeConvertGraphicCaptchaData as LogInOnRefreshGraphicCaptchaFlowCodeConvertGraphicCaptchaData } from '@/xpages/LogIn/flows/OnRefreshGraphicCaptcha/codes/FlowCodeConvertGraphicCaptchaData';
import LogInOnClickDisplayAccountLoginFlowOnClickDisplayAccountLogin from '@/xpages/LogIn/flows/OnClickDisplayAccountLogin/flow.json';
import { flowCodeEnableAccountLoginVisibleControl as LogInOnClickDisplayAccountLoginFlowCodeEnableAccountLoginVisibleControl } from '@/xpages/LogIn/flows/OnClickDisplayAccountLogin/codes/FlowCodeEnableAccountLoginVisibleControl';
import { flowCodeDisableVerificationCodeLoginVisibleControl as LogInOnClickDisplayAccountLoginFlowCodeDisableVerificationCodeLoginVisibleControl } from '@/xpages/LogIn/flows/OnClickDisplayAccountLogin/codes/FlowCodeDisableVerificationCodeLoginVisibleControl';
import LogInOnClickOpenVerificationCodeAndLogInFlowOnClickOpenVerificationCodeAndLogIn from '@/xpages/LogIn/flows/OnClickOpenVerificationCodeAndLogIn/flow.json';
import { flowCodeEnableVerificationCodeLoginVisibleControl as LogInOnClickOpenVerificationCodeAndLogInFlowCodeEnableVerificationCodeLoginVisibleControl } from '@/xpages/LogIn/flows/OnClickOpenVerificationCodeAndLogIn/codes/FlowCodeEnableVerificationCodeLoginVisibleControl';
import { flowCodeDisableAccountLoginVisibleControl as LogInOnClickOpenVerificationCodeAndLogInFlowCodeDisableAccountLoginVisibleControl } from '@/xpages/LogIn/flows/OnClickOpenVerificationCodeAndLogIn/codes/FlowCodeDisableAccountLoginVisibleControl';
import RegisterOnClickRegisterFlowOnClickRegister from '@/xpages/Register/flows/OnClickRegister/flow.json';
import { flowCodeOnClickRegister as RegisterOnClickRegisterFlowCodeOnClickRegister } from '@/xpages/Register/flows/OnClickRegister/codes/FlowCodeOnClickRegister';
import { flowCodeSuccessfullyRegisteredAndRedirectedLogin as RegisterOnClickRegisterFlowCodeSuccessfullyRegisteredAndRedirectedLogin } from '@/xpages/Register/flows/OnClickRegister/codes/FlowCodeSuccessfullyRegisteredAndRedirectedLogin';
import RegisterOnInitializeGraphicCaptchaFlowOnInitializeGraphicCaptcha from '@/xpages/Register/flows/OnInitializeGraphicCaptcha/flow.json';
import { flowCodeSetGraphicalVerificationCode as RegisterOnInitializeGraphicCaptchaFlowCodeSetGraphicalVerificationCode } from '@/xpages/Register/flows/OnInitializeGraphicCaptcha/codes/FlowCodeSetGraphicalVerificationCode';
import { flowCodeSetGraphicCaptchaImage as RegisterOnInitializeGraphicCaptchaFlowCodeSetGraphicCaptchaImage } from '@/xpages/Register/flows/OnInitializeGraphicCaptcha/codes/FlowCodeSetGraphicCaptchaImage';
import { flowCodeConvertGraphicCaptchaData as RegisterOnInitializeGraphicCaptchaFlowCodeConvertGraphicCaptchaData } from '@/xpages/Register/flows/OnInitializeGraphicCaptcha/codes/FlowCodeConvertGraphicCaptchaData';
import ScanedOnObtainWeChatUserInformationFlowOnObtainWeChatUserInformation from '@/xpages/Scaned/flows/OnObtainWeChatUserInformation/flow.json';
import { flowCodeIfAlreadyRegisteredJumpDirectly as ScanedOnObtainWeChatUserInformationFlowCodeIfAlreadyRegisteredJumpDirectly } from '@/xpages/Scaned/flows/OnObtainWeChatUserInformation/codes/FlowCodeIfAlreadyRegisteredJumpDirectly';
import ScanedOnBindMobileNumberFlowOnBindMobileNumber from '@/xpages/Scaned/flows/OnBindMobileNumber/flow.json';
import { flowCodeGetBindingParameters as ScanedOnBindMobileNumberFlowCodeGetBindingParameters } from '@/xpages/Scaned/flows/OnBindMobileNumber/codes/FlowCodeGetBindingParameters';
import { flowCodeDispatchLoggedinUser as ScanedOnBindMobileNumberFlowCodeDispatchLoggedinUser } from '@/xpages/Scaned/flows/OnBindMobileNumber/codes/FlowCodeDispatchLoggedinUser';
import { flowCodeJumpAndSetUserData as ScanedOnBindMobileNumberFlowCodeJumpAndSetUserData } from '@/xpages/Scaned/flows/OnBindMobileNumber/codes/FlowCodeJumpAndSetUserData';
import RegisterOnClickChangePhoneNumberFlowOnClickChangePhoneNumber from '@/xpages/Register/flows/OnClickChangePhoneNumber/flow.json';
import { flowCodeOnClickChangePhoneNumber as RegisterOnClickChangePhoneNumberFlowCodeOnClickChangePhoneNumber } from '@/xpages/Register/flows/OnClickChangePhoneNumber/codes/FlowCodeOnClickChangePhoneNumber';
import RegisterOnClickVerifyFlowOnClickVerify from '@/xpages/Register/flows/OnClickVerify/flow.json';
import { flowCodeOnClickVerify as RegisterOnClickVerifyFlowCodeOnClickVerify } from '@/xpages/Register/flows/OnClickVerify/codes/FlowCodeOnClickVerify';
import RegisterOnClickJumpLoginPageFlowOnClickJumpLoginPage from '@/xpages/Register/flows/OnClickJumpLoginPage/flow.json';
import { flowCodeOnClickJumpLoginPage as RegisterOnClickJumpLoginPageFlowCodeOnClickJumpLoginPage } from '@/xpages/Register/flows/OnClickJumpLoginPage/codes/FlowCodeOnClickJumpLoginPage';
import WeChatLoginOnClickReturnAccountLoginFlowOnClickReturnAccountLogin from '@/components/WeChatLogin/flows/OnClickReturnAccountLogin/flow.json';
import { flowCodeOnClickReturnAccountLogin as WeChatLoginOnClickReturnAccountLoginFlowCodeOnClickReturnAccountLogin } from '@/components/WeChatLogin/flows/OnClickReturnAccountLogin/codes/FlowCodeOnClickReturnAccountLogin';
import LogInOnClickOpenGoogleLoginPanelFlowOnClickOpenGoogleLoginPanel from '@/xpages/LogIn/flows/OnClickOpenGoogleLoginPanel/flow.json';
import { flowCodeDisableVisibleControlInLoginPanel as LogInOnClickOpenGoogleLoginPanelFlowCodeDisableVisibleControlInLoginPanel } from '@/xpages/LogIn/flows/OnClickOpenGoogleLoginPanel/codes/FlowCodeDisableVisibleControlInLoginPanel';
import { flowCodeEnableGoogleLoginPanelVisibleControls as LogInOnClickOpenGoogleLoginPanelFlowCodeEnableGoogleLoginPanelVisibleControls } from '@/xpages/LogIn/flows/OnClickOpenGoogleLoginPanel/codes/FlowCodeEnableGoogleLoginPanelVisibleControls';
import LogInOnClickOpenWeChatLoginFlowOnClickOpenWeChatLogin from '@/xpages/LogIn/flows/OnClickOpenWeChatLogin/flow.json';
import { flowCodeDisableVisibleControlInLoginPanel as LogInOnClickOpenWeChatLoginFlowCodeDisableVisibleControlInLoginPanel } from '@/xpages/LogIn/flows/OnClickOpenWeChatLogin/codes/FlowCodeDisableVisibleControlInLoginPanel';
import { flowCodeEnableWeChatLoginPanelVisibleControl as LogInOnClickOpenWeChatLoginFlowCodeEnableWeChatLoginPanelVisibleControl } from '@/xpages/LogIn/flows/OnClickOpenWeChatLogin/codes/FlowCodeEnableWeChatLoginPanelVisibleControl';
import QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowOnChatSummaryMessageInitializeResultDisplay from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/flow.json';
import { flowCodeInitializeResultDisplayWithInputParameters as QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeInitializeResultDisplayWithInputParameters } from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/codes/FlowCodeInitializeResultDisplayWithInputParameters';
import { flowCodeTheConversionResultDisplaysParameters as QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeTheConversionResultDisplaysParameters } from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/codes/FlowCodeTheConversionResultDisplaysParameters';
import { flowCodeSetSummarizeContent as QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetSummarizeContent } from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/codes/FlowCodeSetSummarizeContent';
import { flowCodeSetFileUrl as QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetFileUrl } from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/codes/FlowCodeSetFileUrl';
import { flowCodeSetItems as QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetItems } from '@/components/QueryResultDisplayComponent/flows/OnChatSummaryMessageInitializeResultDisplay/codes/FlowCodeSetItems';
import SummaryOfAttachmentsForSendingInformationItemsOnGenerateAContentSummaryBasedOnFileFlowOnGenerateAContentSummaryBasedOnFile from '@/components/SummaryOfAttachmentsForSendingInformationItems/flows/OnGenerateAContentSummaryBasedOnFile/flow.json';
import { flowCodeSetSummaryContent as SummaryOfAttachmentsForSendingInformationItemsOnGenerateAContentSummaryBasedOnFileFlowCodeSetSummaryContent } from '@/components/SummaryOfAttachmentsForSendingInformationItems/flows/OnGenerateAContentSummaryBasedOnFile/codes/FlowCodeSetSummaryContent';
import SendMessageFileCardOnClickExpandDataSummaryFlowOnClickExpandDataSummary from '@/components/SendMessageFileCard/flows/OnClickExpandDataSummary/flow.json';
import { flowCodeOnClickExpandDataSummary as SendMessageFileCardOnClickExpandDataSummaryFlowCodeOnClickExpandDataSummary } from '@/components/SendMessageFileCard/flows/OnClickExpandDataSummary/codes/FlowCodeOnClickExpandDataSummary';
import ReplyIndividualComponentOnClickSwitchQueryResultsAndSeeControlFlowOnClickSwitchQueryResultsAndSeeControl from '@/components/ReplyIndividualComponent/flows/OnClickSwitchQueryResultsAndSeeControl/flow.json';
import { flowCodeOnClickSwitchQueryResultsAndSeeControl as ReplyIndividualComponentOnClickSwitchQueryResultsAndSeeControlFlowCodeOnClickSwitchQueryResultsAndSeeControl } from '@/components/ReplyIndividualComponent/flows/OnClickSwitchQueryResultsAndSeeControl/codes/FlowCodeOnClickSwitchQueryResultsAndSeeControl';
import QueryResultDataTableOnInitializeTableDataFlowOnInitializeTableData from '@/components/QueryResultDataTable/flows/OnInitializeTableData/flow.json';
import { flowCodeOnInitializeTableData as QueryResultDataTableOnInitializeTableDataFlowCodeOnInitializeTableData } from '@/components/QueryResultDataTable/flows/OnInitializeTableData/codes/FlowCodeOnInitializeTableData';
import SendMessageFileCardOnMonitorDataChangesAnimationFlowOnMonitorDataChangesAnimation from '@/components/SendMessageFileCard/flows/OnMonitorDataChangesAnimation/flow.json';
import { flowCodeOnMonitorDataChangesAnimation as SendMessageFileCardOnMonitorDataChangesAnimationFlowCodeOnMonitorDataChangesAnimation } from '@/components/SendMessageFileCard/flows/OnMonitorDataChangesAnimation/codes/FlowCodeOnMonitorDataChangesAnimation';
import LeftComponentOnNewConversationFlowOnNewConversation from '@/components/LeftComponent/flows/OnNewConversation/flow.json';
import { flowCodePrepareCreateSessionParameters as LeftComponentOnNewConversationFlowCodePrepareCreateSessionParameters } from '@/components/LeftComponent/flows/OnNewConversation/codes/FlowCodePrepareCreateSessionParameters';
import { flowCodeSetSessionURLAndData as LeftComponentOnNewConversationFlowCodeSetSessionURLAndData } from '@/components/LeftComponent/flows/OnNewConversation/codes/FlowCodeSetSessionURLAndData';
import SendSingleAttachmentInformationOnMonitorDataChangesAnimationFlowOnMonitorDataChangesAnimation from '@/components/SendSingleAttachmentInformation/flows/OnMonitorDataChangesAnimation/flow.json';
import { flowCodeOnMonitorDataChangesAnimation as SendSingleAttachmentInformationOnMonitorDataChangesAnimationFlowCodeOnMonitorDataChangesAnimation } from '@/components/SendSingleAttachmentInformation/flows/OnMonitorDataChangesAnimation/codes/FlowCodeOnMonitorDataChangesAnimation';
import SendSingleAttachmentInformationOnClickExpandDataSummaryFlowOnClickExpandDataSummary from '@/components/SendSingleAttachmentInformation/flows/OnClickExpandDataSummary/flow.json';
import { flowCodeOnClickExpandDataSummary as SendSingleAttachmentInformationOnClickExpandDataSummaryFlowCodeOnClickExpandDataSummary } from '@/components/SendSingleAttachmentInformation/flows/OnClickExpandDataSummary/codes/FlowCodeOnClickExpandDataSummary';
import SendSingleAttachmentInformationOnClickOnFileCardComponentOpenAndCloseSummaryFlowOnClickOnFileCardComponentOpenAndCloseSummary from '@/components/SendSingleAttachmentInformation/flows/OnClickOnFileCardComponentOpenAndCloseSummary/flow.json';
import { flowCodeOnClickOnFileCardComponentOpenAndCloseSummary as SendSingleAttachmentInformationOnClickOnFileCardComponentOpenAndCloseSummaryFlowCodeOnClickOnFileCardComponentOpenAndCloseSummary } from '@/components/SendSingleAttachmentInformation/flows/OnClickOnFileCardComponentOpenAndCloseSummary/codes/FlowCodeOnClickOnFileCardComponentOpenAndCloseSummary';
import PromptWordsBasedOnQueryResultsOnInitializePromptWordSetFlowOnInitializePromptWordSet from '@/components/PromptWordsBasedOnQueryResults/flows/OnInitializePromptWordSet/flow.json';
import { flowCodeOnInitializePromptWordSet as PromptWordsBasedOnQueryResultsOnInitializePromptWordSetFlowCodeOnInitializePromptWordSet } from '@/components/PromptWordsBasedOnQueryResults/flows/OnInitializePromptWordSet/codes/FlowCodeOnInitializePromptWordSet';
import QueryResultDisplayComponentOnClickOpenAndCloseChartFlowOnClickOpenAndCloseChart from '@/components/QueryResultDisplayComponent/flows/OnClickOpenAndCloseChart/flow.json';
import { flowCodeEnableVisibleControlOfChartComponent as QueryResultDisplayComponentOnClickOpenAndCloseChartFlowCodeEnableVisibleControlOfChartComponent } from '@/components/QueryResultDisplayComponent/flows/OnClickOpenAndCloseChart/codes/FlowCodeEnableVisibleControlOfChartComponent';
import VisualizationChartOnInitializeChartDataFlowOnInitializeChartData from '@/components/VisualizationChart/flows/OnInitializeChartData/flow.json';
import { flowCodeOnInitializeChartData as VisualizationChartOnInitializeChartDataFlowCodeOnInitializeChartData } from '@/components/VisualizationChart/flows/OnInitializeChartData/codes/FlowCodeOnInitializeChartData';
import PanelOnMonitorURLFlowOnMonitorURL from '@/components/Panel/flows/OnMonitorURL/flow.json';
import { flowCodeOnMonitorURL as PanelOnMonitorURLFlowCodeOnMonitorURL } from '@/components/Panel/flows/OnMonitorURL/codes/FlowCodeOnMonitorURL';
import QueryResultDisplayComponentOnClickOpenAndCloseSQLComponentFlowOnClickOpenAndCloseSQLComponent from '@/components/QueryResultDisplayComponent/flows/OnClickOpenAndCloseSQLComponent/flow.json';
import { flowCodeOnClickOpenAndCloseSQLComponent as QueryResultDisplayComponentOnClickOpenAndCloseSQLComponentFlowCodeOnClickOpenAndCloseSQLComponent } from '@/components/QueryResultDisplayComponent/flows/OnClickOpenAndCloseSQLComponent/codes/FlowCodeOnClickOpenAndCloseSQLComponent';
import DialogueOnInitializeFileAndSchemaListFlowOnInitializeFileAndSchemaList from '@/components/Dialogue/flows/OnInitializeFileAndSchemaList/flow.json';
import { flowCodeInitializeFileAndSchemaListParameters as DialogueOnInitializeFileAndSchemaListFlowCodeInitializeFileAndSchemaListParameters } from '@/components/Dialogue/flows/OnInitializeFileAndSchemaList/codes/FlowCodeInitializeFileAndSchemaListParameters';
import { flowCodeConvertDialogueDataPatternsAndFiles as DialogueOnInitializeFileAndSchemaListFlowCodeConvertDialogueDataPatternsAndFiles } from '@/components/Dialogue/flows/OnInitializeFileAndSchemaList/codes/FlowCodeConvertDialogueDataPatternsAndFiles';
import { flowCodeDispatchDialogueDataSchemaList as DialogueOnInitializeFileAndSchemaListFlowCodeDispatchDialogueDataSchemaList } from '@/components/Dialogue/flows/OnInitializeFileAndSchemaList/codes/FlowCodeDispatchDialogueDataSchemaList';
import ThreePointComponentOnSelectDataSchemaPreviewFlowOnSelectDataSchemaPreview from '@/components/ThreePointComponent/flows/OnSelectDataSchemaPreview/flow.json';
import { flowCodeDispatchPreviewUrlOfSelectedSchema as ThreePointComponentOnSelectDataSchemaPreviewFlowCodeDispatchPreviewUrlOfSelectedSchema } from '@/components/ThreePointComponent/flows/OnSelectDataSchemaPreview/codes/FlowCodeDispatchPreviewUrlOfSelectedSchema';
import LeftComponentOnClickExpandSidebarFlowOnClickExpandSidebar from '@/components/LeftComponent/flows/OnClickExpandSidebar/flow.json';
import { flowCodeOnClickExpandSidebar as LeftComponentOnClickExpandSidebarFlowCodeOnClickExpandSidebar } from '@/components/LeftComponent/flows/OnClickExpandSidebar/codes/FlowCodeOnClickExpandSidebar';
import LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowOnAutomaticallyCreateASessionUponFirstLogin from '@/components/LeftComponent/flows/OnAutomaticallyCreateASessionUponFirstLogin/flow.json';
import { flowCodePrepareCreateSessionParameters as LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowCodePrepareCreateSessionParameters } from '@/components/LeftComponent/flows/OnAutomaticallyCreateASessionUponFirstLogin/codes/FlowCodePrepareCreateSessionParameters';
import { flowCodeSetGlobalSessionAndURL as LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowCodeSetGlobalSessionAndURL } from '@/components/LeftComponent/flows/OnAutomaticallyCreateASessionUponFirstLogin/codes/FlowCodeSetGlobalSessionAndURL';
import LeftComponentOnClickCollapseLeftSidebarFlowOnClickCollapseLeftSidebar from '@/components/LeftComponent/flows/OnClickCollapseLeftSidebar/flow.json';
import { flowCodeOnClickCollapseLeftSidebar as LeftComponentOnClickCollapseLeftSidebarFlowCodeOnClickCollapseLeftSidebar } from '@/components/LeftComponent/flows/OnClickCollapseLeftSidebar/codes/FlowCodeOnClickCollapseLeftSidebar';
import DialogueOnClickOpenAndCloseGroupChatSettingsFlowOnClickOpenAndCloseGroupChatSettings from '@/components/Dialogue/flows/OnClickOpenAndCloseGroupChatSettings/flow.json';
import { flowCodeSetGroupChatSettingsDrawerVisible as DialogueOnClickOpenAndCloseGroupChatSettingsFlowCodeSetGroupChatSettingsDrawerVisible } from '@/components/Dialogue/flows/OnClickOpenAndCloseGroupChatSettings/codes/FlowCodeSetGroupChatSettingsDrawerVisible';
import DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId from '@/components/Dialogue/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/flow.json';
import { flowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId as DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId } from '@/components/Dialogue/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId';
import { flowCodeSetSenderIdList as DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderIdList } from '@/components/Dialogue/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeSetSenderIdList';
import { flowNodeSetSenderNicknameDictionary as DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowNodeSetSenderNicknameDictionary } from '@/components/Dialogue/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowNodeSetSenderNicknameDictionary';
import { flowCodeSetChatConversationListControl as DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetChatConversationListControl } from '@/components/Dialogue/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeSetChatConversationListControl';
import LeftComponentOnInitializeUserDialogueCardListFlowOnInitializeUserDialogueCardList from '@/components/LeftComponent/flows/OnInitializeUserDialogueCardList/flow.json';
import { flowNodeOnInitializeUserDialogueCardList as LeftComponentOnInitializeUserDialogueCardListFlowNodeOnInitializeUserDialogueCardList } from '@/components/LeftComponent/flows/OnInitializeUserDialogueCardList/codes/FlowNodeOnInitializeUserDialogueCardList';
import { flowNodeConvertDialogueCardList as LeftComponentOnInitializeUserDialogueCardListFlowNodeConvertDialogueCardList } from '@/components/LeftComponent/flows/OnInitializeUserDialogueCardList/codes/FlowNodeConvertDialogueCardList';
import { flowCodeSetDialogueCardList as LeftComponentOnInitializeUserDialogueCardListFlowCodeSetDialogueCardList } from '@/components/LeftComponent/flows/OnInitializeUserDialogueCardList/codes/FlowCodeSetDialogueCardList';
import DialogueOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity from '@/components/Dialogue/flows/OnUpdateNewMessageEntity/flow.json';
import { flowCodeOnUpdateNewMessageEntity as DialogueOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity } from '@/components/Dialogue/flows/OnUpdateNewMessageEntity/codes/FlowCodeOnUpdateNewMessageEntity';
import DialogueOnSubmitTaskFlowOnSubmitTask from '@/components/Dialogue/flows/OnSubmitTask/flow.json';
import { flowNodeSubmitTaskPreparationParameters as DialogueOnSubmitTaskFlowNodeSubmitTaskPreparationParameters } from '@/components/Dialogue/flows/OnSubmitTask/codes/FlowNodeSubmitTaskPreparationParameters';
import DialogueOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId from '@/components/Dialogue/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/flow.json';
import { flowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId as DialogueOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId } from '@/components/Dialogue/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/codes/FlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId';
import DialogueOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList from '@/components/Dialogue/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/flow.json';
import { flowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList as DialogueOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList } from '@/components/Dialogue/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/codes/FlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList';
import RightComponentOnSubmitTaskFlowOnSubmitTask from '@/components/RightComponent/flows/OnSubmitTask/flow.json';
import { flowCodeOnSubmitTask as RightComponentOnSubmitTaskFlowCodeOnSubmitTask } from '@/components/RightComponent/flows/OnSubmitTask/codes/FlowCodeOnSubmitTask';
import RightComponentOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId from '@/components/RightComponent/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/flow.json';
import { flowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId as RightComponentOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId } from '@/components/RightComponent/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/codes/FlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId';
import RightComponentOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity from '@/components/RightComponent/flows/OnUpdateNewMessageEntity/flow.json';
import { flowCodeOnUpdateNewMessageEntity as RightComponentOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity } from '@/components/RightComponent/flows/OnUpdateNewMessageEntity/codes/FlowCodeOnUpdateNewMessageEntity';
import RightComponentOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList from '@/components/RightComponent/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/flow.json';
import { flowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList as RightComponentOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList } from '@/components/RightComponent/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/codes/FlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList';
import RightComponentOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId from '@/components/RightComponent/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/flow.json';
import { flowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId as RightComponentOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId } from '@/components/RightComponent/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId';
import LeftComponentOnDetermineWhetherItAnAddConversationFlowOnDetermineWhetherItAnAddConversation from '@/components/LeftComponent/flows/OnDetermineWhetherItAnAddConversation/flow.json';
import { flowCodeOnDetermineWhetherItAnAddConversation as LeftComponentOnDetermineWhetherItAnAddConversationFlowCodeOnDetermineWhetherItAnAddConversation } from '@/components/LeftComponent/flows/OnDetermineWhetherItAnAddConversation/codes/FlowCodeOnDetermineWhetherItAnAddConversation';
import TestPageOnInitializeAGGRIdFlowOnInitializeAGGRId from '@/xpages/TestPage/flows/OnInitializeAGGRId/flow.json';
import { flowCodeOnInitializeAGGRId as TestPageOnInitializeAGGRIdFlowCodeOnInitializeAGGRId } from '@/xpages/TestPage/flows/OnInitializeAGGRId/codes/FlowCodeOnInitializeAGGRId';
import MainOnSubmitTaskFlowOnSubmitTask from '@/xpages/Main/flows/OnSubmitTask/flow.json';
import { flowCodeSubmitTaskPreparationParameters as MainOnSubmitTaskFlowCodeSubmitTaskPreparationParameters } from '@/xpages/Main/flows/OnSubmitTask/codes/FlowCodeSubmitTaskPreparationParameters';
import MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId from '@/xpages/Main/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/flow.json';
import { flowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId as MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId } from '@/xpages/Main/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId';
import { flowCodeSetSenderIdList as MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderIdList } from '@/xpages/Main/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeSetSenderIdList';
import { flowCodeSetSenderNicknameDictionary as MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderNicknameDictionary } from '@/xpages/Main/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeSetSenderNicknameDictionary';
import { flowCodeSetChatConversationListControl as MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetChatConversationListControl } from '@/xpages/Main/flows/OnRetrieveHistoricalChatRecordsBasedOnConversationId/codes/FlowCodeSetChatConversationListControl';
import InputBoxOnClickSendUserMessageFlowOnClickSendUserMessage from '@/components/InputBox/flows/OnClickSendUserMessage/flow.json';
import { flowCodePrepareDataQueryParameters as InputBoxOnClickSendUserMessageFlowCodePrepareDataQueryParameters } from '@/components/InputBox/flows/OnClickSendUserMessage/codes/FlowCodePrepareDataQueryParameters';
import MainOnInitializeUserDialogueCardListFlowOnInitializeUserDialogueCardList from '@/xpages/Main/flows/OnInitializeUserDialogueCardList/flow.json';
import { flowCodeOnInitializeUserDialogueCardList as MainOnInitializeUserDialogueCardListFlowCodeOnInitializeUserDialogueCardList } from '@/xpages/Main/flows/OnInitializeUserDialogueCardList/codes/FlowCodeOnInitializeUserDialogueCardList';
import { flowCodeConvertDialogueCardList as MainOnInitializeUserDialogueCardListFlowCodeConvertDialogueCardList } from '@/xpages/Main/flows/OnInitializeUserDialogueCardList/codes/FlowCodeConvertDialogueCardList';
import { flowCodeSetDialogueCardList as MainOnInitializeUserDialogueCardListFlowCodeSetDialogueCardList } from '@/xpages/Main/flows/OnInitializeUserDialogueCardList/codes/FlowCodeSetDialogueCardList';
import MainOnDetermineWhetherItAnAddConversationFlowOnDetermineWhetherItAnAddConversation from '@/xpages/Main/flows/OnDetermineWhetherItAnAddConversation/flow.json';
import { flowCodeOnDetermineWhetherItAnAddConversation as MainOnDetermineWhetherItAnAddConversationFlowCodeOnDetermineWhetherItAnAddConversation } from '@/xpages/Main/flows/OnDetermineWhetherItAnAddConversation/codes/FlowCodeOnDetermineWhetherItAnAddConversation';
import MainOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity from '@/xpages/Main/flows/OnUpdateNewMessageEntity/flow.json';
import { flowCodeOnUpdateNewMessageEntity as MainOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity } from '@/xpages/Main/flows/OnUpdateNewMessageEntity/codes/FlowCodeOnUpdateNewMessageEntity';
import MainOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId from '@/xpages/Main/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/flow.json';
import { flowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId as MainOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId } from '@/xpages/Main/flows/OnDetermineWhetherConversationCompletedBasedOnConversationId/codes/FlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId';
import MainOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList from '@/xpages/Main/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/flow.json';
import { flowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList as MainOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList } from '@/xpages/Main/flows/OnUpdateNicknameDictionaryBasedOnSenderIdList/codes/FlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList';
import ReplyIndividualComponentOnObtainContentOfReplyMessageFlowOnObtainContentOfReplyMessage from '@/components/ReplyIndividualComponent/flows/OnObtainContentOfReplyMessage/flow.json';
import { flowCodeOnObtainContentOfReplyMessage as ReplyIndividualComponentOnObtainContentOfReplyMessageFlowCodeOnObtainContentOfReplyMessage } from '@/components/ReplyIndividualComponent/flows/OnObtainContentOfReplyMessage/codes/FlowCodeOnObtainContentOfReplyMessage';
import SendASingleMessageOnRetrieveMessageContentFlowOnRetrieveMessageContent from '@/components/SendASingleMessage/flows/OnRetrieveMessageContent/flow.json';
import { flowCodeOnRetrieveMessageContent as SendASingleMessageOnRetrieveMessageContentFlowCodeOnRetrieveMessageContent } from '@/components/SendASingleMessage/flows/OnRetrieveMessageContent/codes/FlowCodeOnRetrieveMessageContent';
import QASingleComponentOnVisibleControlForSendingOrReplyingChatMessagesFlowOnVisibleControlForSendingOrReplyingChatMessages from '@/components/QASingleComponent/flows/OnVisibleControlForSendingOrReplyingChatMessages/flow.json';
import { flowCodeOnVisibleControlForSendingOrReplyingChatMessages as QASingleComponentOnVisibleControlForSendingOrReplyingChatMessagesFlowCodeOnVisibleControlForSendingOrReplyingChatMessages } from '@/components/QASingleComponent/flows/OnVisibleControlForSendingOrReplyingChatMessages/codes/FlowCodeOnVisibleControlForSendingOrReplyingChatMessages';
import MainOnClickCollapseLeftSidebarFlowOnClickCollapseLeftSidebar from '@/xpages/Main/flows/OnClickCollapseLeftSidebar/flow.json';
import { flowCodeDisableExpandVisibleControlsOnLeftSidebar as MainOnClickCollapseLeftSidebarFlowCodeDisableExpandVisibleControlsOnLeftSidebar } from '@/xpages/Main/flows/OnClickCollapseLeftSidebar/codes/FlowCodeDisableExpandVisibleControlsOnLeftSidebar';
import { flowCodeEnableFoldingUpVisibleControlsOnLeftSidebar as MainOnClickCollapseLeftSidebarFlowCodeEnableFoldingUpVisibleControlsOnLeftSidebar } from '@/xpages/Main/flows/OnClickCollapseLeftSidebar/codes/FlowCodeEnableFoldingUpVisibleControlsOnLeftSidebar';
import MainOnClickExpandSidebarFlowOnClickExpandSidebar from '@/xpages/Main/flows/OnClickExpandSidebar/flow.json';
import { flowCodeDisableFoldingUpVisibleControlsOnLeftSidebar as MainOnClickExpandSidebarFlowCodeDisableFoldingUpVisibleControlsOnLeftSidebar } from '@/xpages/Main/flows/OnClickExpandSidebar/codes/FlowCodeDisableFoldingUpVisibleControlsOnLeftSidebar';
import { flowCodeEnableExpandVisibleControlsOnLeftSidebar as MainOnClickExpandSidebarFlowCodeEnableExpandVisibleControlsOnLeftSidebar } from '@/xpages/Main/flows/OnClickExpandSidebar/codes/FlowCodeEnableExpandVisibleControlsOnLeftSidebar';
import InformationOperationComponentOnFeedbackAndReportDialogueCancelFlowOnFeedbackAndReportDialogueCancel from '@/components/InformationOperationComponent/flows/OnFeedbackAndReportDialogueCancel/flow.json';
import { flowCodeCloseFeedbackAndReportDialogueVisible as InformationOperationComponentOnFeedbackAndReportDialogueCancelFlowCodeCloseFeedbackAndReportDialogueVisible } from '@/components/InformationOperationComponent/flows/OnFeedbackAndReportDialogueCancel/codes/FlowCodeCloseFeedbackAndReportDialogueVisible';
import InformationOperationComponentOnOpenFeedbackAndReportDialogueFlowOnOpenFeedbackAndReportDialogue from '@/components/InformationOperationComponent/flows/OnOpenFeedbackAndReportDialogue/flow.json';
import { flowCodeOpenFeedbackAndReportDialogueVisible as InformationOperationComponentOnOpenFeedbackAndReportDialogueFlowCodeOpenFeedbackAndReportDialogueVisible } from '@/components/InformationOperationComponent/flows/OnOpenFeedbackAndReportDialogue/codes/FlowCodeOpenFeedbackAndReportDialogueVisible';
import MainOnMonitorVisibleControlChangesFlowOnMonitorVisibleControlChanges from '@/xpages/Main/flows/OnMonitorVisibleControlChanges/flow.json';
import { flowCodeOnMonitorVisibleControlChanges as MainOnMonitorVisibleControlChangesFlowCodeOnMonitorVisibleControlChanges } from '@/xpages/Main/flows/OnMonitorVisibleControlChanges/codes/FlowCodeOnMonitorVisibleControlChanges';
import MainOnClickOnAddDialogueItemFlowOnClickOnAddDialogueItem from '@/xpages/Main/flows/OnClickOnAddDialogueItem/flow.json';
import { flowCodeOnClickOnAddDialogueItem as MainOnClickOnAddDialogueItemFlowCodeOnClickOnAddDialogueItem } from '@/xpages/Main/flows/OnClickOnAddDialogueItem/codes/FlowCodeOnClickOnAddDialogueItem';

export const loadAll = async () => {
  loadMy();
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_QUERY_ORDER_DETAILS_BASED_ON_ORDER_ID', dialogueFlowQueryOrderDetailsBasedOnOrderIdFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_ID', JSON.parse(JSON.stringify(dialogueFlowQueryOrderDetailsBasedOnOrderId)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_SEARCH_FOR_PACKAGES_BASED_ON_CODE', dialogueFlowSearchForPackagesBasedOnCodeFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_SEARCH_FOR_PACKAGES_BASED_ON_CODE', JSON.parse(JSON.stringify(dialogueFlowSearchForPackagesBasedOnCode)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_QUERY_PACKAGE', dialogueFlowQueryPackageFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_PACKAGE', JSON.parse(JSON.stringify(dialogueFlowQueryPackage)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_GET_WE_CHAT_CALLBACK_AND_SET_TEMPORARYKEN', dialogueFlowGetWeChatCallbackAndSetTemporarykenFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_GET_WE_CHAT_CALLBACK_AND_SET_TEMPORARYKEN', JSON.parse(JSON.stringify(dialogueFlowGetWeChatCallbackAndSetTemporaryken)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_QUERY_STATUS_OF_SMART_ACCOUNTS_BASED_ONIR_IDS', dialogueFlowQueryStatusOfSmartAccountsBasedOnirIdsFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_QUERY_STATUS_OF_SMART_ACCOUNTS_BASED_ONIR_IDS', JSON.parse(JSON.stringify(dialogueFlowQueryStatusOfSmartAccountsBasedOnirIds)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_UPDATE_DATA_INTELLIGENT_ACCOUNT_STATUS', dialogueFlowUpdateDataIntelligentAccountStatusFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_DATA_INTELLIGENT_ACCOUNT_STATUS', JSON.parse(JSON.stringify(dialogueFlowUpdateDataIntelligentAccountStatus)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_VERIFY_PAYMENT_ACCOUNT', dialogueFlowVerifyPaymentAccountFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_VERIFY_PAYMENT_ACCOUNT', JSON.parse(JSON.stringify(dialogueFlowVerifyPaymentAccount)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_CREATE_DATA_SMART_ACCOUNT_MEMBERSHIP', dialogueFlowCreateDataSmartAccountMembershipFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_DATA_SMART_ACCOUNT_MEMBERSHIP', JSON.parse(JSON.stringify(dialogueFlowCreateDataSmartAccountMembership)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_REGISTER', dialogueFlowRegisterFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_REGISTER', JSON.parse(JSON.stringify(dialogueFlowRegister)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_WE_CHAT_BINDING_PHONE_NUMBER_REGISTRATION', dialogueFlowWeChatBindingPhoneNumberRegistrationFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_WE_CHAT_BINDING_PHONE_NUMBER_REGISTRATION', JSON.parse(JSON.stringify(dialogueFlowWeChatBindingPhoneNumberRegistration)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_MIGRATION_OF_TEMPORARY_USER_CONVERSATIONS', dialogueFlowMigrationOfTemporaryUserConversationsFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_MIGRATION_OF_TEMPORARY_USER_CONVERSATIONS', JSON.parse(JSON.stringify(dialogueFlowMigrationOfTemporaryUserConversations)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_CREATE_TEMPORARY_USER', dialogueFlowCreateTemporaryUserFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_TEMPORARY_USER', JSON.parse(JSON.stringify(dialogueFlowCreateTemporaryUser)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_GET_LIST_OF_DIALOGUE_MESSAGES', dialogueFlowGetListOfDialogueMessagesFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_GET_LIST_OF_DIALOGUE_MESSAGES', JSON.parse(JSON.stringify(dialogueFlowGetListOfDialogueMessages)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_BASED_ON_CONTENT_SUMMARY_OF_INITIALIZE_FILE', dialogueFlowBasedOnContentSummaryOfInitializeFileFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_BASED_ON_CONTENT_SUMMARY_OF_INITIALIZE_FILE', JSON.parse(JSON.stringify(dialogueFlowBasedOnContentSummaryOfInitializeFile)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_INITIALIZE_RESULTS_BASED_ON_QUERY_RESULTS_AND_DISPLAYM', dialogueFlowInitializeResultsBasedOnQueryResultsAndDisplaymFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_INITIALIZE_RESULTS_BASED_ON_QUERY_RESULTS_AND_DISPLAYM', JSON.parse(JSON.stringify(dialogueFlowInitializeResultsBasedOnQueryResultsAndDisplaym)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_INTELLIGENT_DATA_QUERY', dialogueFlowIntelligentDataQueryFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_INTELLIGENT_DATA_QUERY', JSON.parse(JSON.stringify(dialogueFlowIntelligentDataQuery)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_GET_DIALOGUE_SCHEMA_LIST', dialogueFlowGetDialogueSchemaListFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_LIST', JSON.parse(JSON.stringify(dialogueFlowGetDialogueSchemaList)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_CREATE_A_DIALOGUE', dialogueFlowCreateADialogueFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_CREATE_A_DIALOGUE', JSON.parse(JSON.stringify(dialogueFlowCreateADialogue)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_GET_DIALOGUE_SCHEMA_DATA_CSV_URL', dialogueFlowGetDialogueSchemaDataCsvUrlFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_GET_DIALOGUE_SCHEMA_DATA_CSV_URL', JSON.parse(JSON.stringify(dialogueFlowGetDialogueSchemaDataCsvUrl)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_EXECUTE_INTELLIGENT_DATA_TASKS', dialogueFlowExecuteIntelligentDataTasksFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_EXECUTE_INTELLIGENT_DATA_TASKS', JSON.parse(JSON.stringify(dialogueFlowExecuteIntelligentDataTasks)))
  register('@com.horsecoder.platform.mall.dialogue/FLOW_CODE_UPDATE_TASK_STATUS_AND_OUTPUT', dialogueFlowUpdateTaskStatusAndOutputFacade);
  load('@com.horsecoder.platform.mall.dialogue/FLOW_UPDATE_TASK_STATUS_AND_OUTPUT', JSON.parse(JSON.stringify(dialogueFlowUpdateTaskStatusAndOutput)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_DIALOGUE_ACCOUNT_REGISTRATION', aiMarketingFlowDialogueAccountRegistrationFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_REGISTRATION', JSON.parse(JSON.stringify(aiMarketingFlowDialogueAccountRegistration)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_DIALOGUE_ACCOUNT_LOGIN', aiMarketingFlowDialogueAccountLoginFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_DIALOGUE_ACCOUNT_LOGIN', JSON.parse(JSON.stringify(aiMarketingFlowDialogueAccountLogin)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_GET_LATEST_SPACE', aiMarketingFlowGetLatestSpaceFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_SPACE', JSON.parse(JSON.stringify(aiMarketingFlowGetLatestSpace)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_GET_LATEST_NEWS_BASED_ON_CONVERSATION_ACCOUNT_ID', aiMarketingFlowGetLatestNewsBasedOnConversationAccountIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_GET_LATEST_NEWS_BASED_ON_CONVERSATION_ACCOUNT_ID', JSON.parse(JSON.stringify(aiMarketingFlowGetLatestNewsBasedOnConversationAccountId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_ADD_TEMPORARY_MESSAGE', aiMarketingFlowAddTemporaryMessageFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_ADD_TEMPORARY_MESSAGE', JSON.parse(JSON.stringify(aiMarketingFlowAddTemporaryMessage)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_GENERATE_PAGES_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS', aiMarketingFlowGeneratePagesBasedOnDialogueModelRequirementsAnalysisFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_PAGES_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS', JSON.parse(JSON.stringify(aiMarketingFlowGeneratePagesBasedOnDialogueModelRequirementsAnalysis)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_SUBSCRIPTION_MEMBERS', aiMarketingFlowSubscriptionMembersFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_SUBSCRIPTION_MEMBERS', JSON.parse(JSON.stringify(aiMarketingFlowSubscriptionMembers)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_PAGE_LIST_BASED_ON_DIALOGUE_MODEL', aiMarketingFlowQueryPageListBasedOnDialogueModelFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_PAGE_LIST_BASED_ON_DIALOGUE_MODEL', JSON.parse(JSON.stringify(aiMarketingFlowQueryPageListBasedOnDialogueModel)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_CREATE_A_DIALOGUE_MODEL', aiMarketingFlowCreateADialogueModelFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_DIALOGUE_MODEL', JSON.parse(JSON.stringify(aiMarketingFlowCreateADialogueModel)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_CREATE_DIALOGUE_MODEL_KNOWLEDGE', aiMarketingFlowCreateDialogueModelKnowledgeFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_DIALOGUE_MODEL_KNOWLEDGE', JSON.parse(JSON.stringify(aiMarketingFlowCreateDialogueModelKnowledge)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_DETERMINE_WHETHER_CURRENT_CONVERSATION_AND_DIALOGUE_MODEL_EXIST', aiMarketingFlowDetermineWhetherCurrentConversationAndDialogueModelExistFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_DETERMINE_WHETHER_CURRENT_CONVERSATION_AND_DIALOGUE_MODEL_EXIST', JSON.parse(JSON.stringify(aiMarketingFlowDetermineWhetherCurrentConversationAndDialogueModelExist)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_PAGE_GENERATION', aiMarketingFlowPageGenerationFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_PAGE_GENERATION', JSON.parse(JSON.stringify(aiMarketingFlowPageGeneration)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_SEND_A_MESSAGE', aiMarketingFlowSendAMessageFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_SEND_A_MESSAGE', JSON.parse(JSON.stringify(aiMarketingFlowSendAMessage)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_CREATE_A_CONVERSATION', aiMarketingFlowCreateAConversationFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_CREATE_A_CONVERSATION', JSON.parse(JSON.stringify(aiMarketingFlowCreateAConversation)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_CONVERSATION_ACCOUNT_DETAILS_BASED_ON_ID', aiMarketingFlowQueryConversationAccountDetailsBasedOnIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_ACCOUNT_DETAILS_BASED_ON_ID', JSON.parse(JSON.stringify(aiMarketingFlowQueryConversationAccountDetailsBasedOnId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_UPDATE_CURRENT_CONVERSATION_ACCOUNT_TYPE', aiMarketingFlowUpdateCurrentConversationAccountTypeFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_CURRENT_CONVERSATION_ACCOUNT_TYPE', JSON.parse(JSON.stringify(aiMarketingFlowUpdateCurrentConversationAccountType)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_GENERATE_CORE_MODEL_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS', aiMarketingFlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysisFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_GENERATE_CORE_MODEL_BASED_ON_DIALOGUE_MODEL_REQUIREMENTS_ANALYSIS', JSON.parse(JSON.stringify(aiMarketingFlowGenerateCoreModelBasedOnDialogueModelRequirementsAnalysis)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_UPDATE_STATUS_OF_DIALOGUE_DETAILS', aiMarketingFlowUpdateStatusOfDialogueDetailsFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_UPDATE_STATUS_OF_DIALOGUE_DETAILS', JSON.parse(JSON.stringify(aiMarketingFlowUpdateStatusOfDialogueDetails)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_DIALOGUE_MODEL_DETAILS_AND_DIALOGUE_MODEL_INFORMATION_LIST', aiMarketingFlowQueryDialogueModelDetailsAndDialogueModelInformationListFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_DETAILS_AND_DIALOGUE_MODEL_INFORMATION_LIST', JSON.parse(JSON.stringify(aiMarketingFlowQueryDialogueModelDetailsAndDialogueModelInformationList)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_PROJECT_NAME_IDENTIFICATION', aiMarketingFlowProjectNameIdentificationFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_IDENTIFICATION', JSON.parse(JSON.stringify(aiMarketingFlowProjectNameIdentification)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_VERIFYRE_ALREADY_AN_INVITATION_LINK', aiMarketingFlowVerifyreAlreadyAnInvitationLinkFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_VERIFYRE_ALREADY_AN_INVITATION_LINK', JSON.parse(JSON.stringify(aiMarketingFlowVerifyreAlreadyAnInvitationLink)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_SEARCH_FOR_REQUIREMENT_ANALYSIS_DOCUMENT_BASED_ON_DIALOGUE_MODEL_ID', aiMarketingFlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_SEARCH_FOR_REQUIREMENT_ANALYSIS_DOCUMENT_BASED_ON_DIALOGUE_MODEL_ID', JSON.parse(JSON.stringify(aiMarketingFlowSearchForRequirementAnalysisDocumentBasedOnDialogueModelId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_REQUIREMENT_ANALYSIS', aiMarketingFlowRequirementAnalysisFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_REQUIREMENT_ANALYSIS', JSON.parse(JSON.stringify(aiMarketingFlowRequirementAnalysis)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_DIALOGUE_MODEL_BASED_ON_DIALOGUE_ID_AND_MODEL_ID', aiMarketingFlowQueryDialogueModelBasedOnDialogueIdAndModelIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_BASED_ON_DIALOGUE_ID_AND_MODEL_ID', JSON.parse(JSON.stringify(aiMarketingFlowQueryDialogueModelBasedOnDialogueIdAndModelId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_DIALOGUE_BASED_ON_DIALOGUE_MODEL_ID', aiMarketingFlowQueryDialogueBasedOnDialogueModelIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_BASED_ON_DIALOGUE_MODEL_ID', JSON.parse(JSON.stringify(aiMarketingFlowQueryDialogueBasedOnDialogueModelId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_DIALOGUE_MODEL_LIST_BASED_ON_USER_ID', aiMarketingFlowQueryDialogueModelListBasedOnUserIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_DIALOGUE_MODEL_LIST_BASED_ON_USER_ID', JSON.parse(JSON.stringify(aiMarketingFlowQueryDialogueModelListBasedOnUserId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_CONVERSATION_DETAILS', aiMarketingFlowQueryConversationDetailsFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_DETAILS', JSON.parse(JSON.stringify(aiMarketingFlowQueryConversationDetails)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_PROJECT_NAME_INTELLIGENT_AGENT_CALL', aiMarketingFlowProjectNameIntelligentAgentCallFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_PROJECT_NAME_INTELLIGENT_AGENT_CALL', JSON.parse(JSON.stringify(aiMarketingFlowProjectNameIntelligentAgentCall)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_CORE_MODEL_GENERATION', aiMarketingFlowCoreModelGenerationFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_CORE_MODEL_GENERATION', JSON.parse(JSON.stringify(aiMarketingFlowCoreModelGeneration)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_CORE_MODEL_LIST_BASED_ON_DIALOGUE_MODEL', aiMarketingFlowQueryCoreModelListBasedOnDialogueModelFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CORE_MODEL_LIST_BASED_ON_DIALOGUE_MODEL', JSON.parse(JSON.stringify(aiMarketingFlowQueryCoreModelListBasedOnDialogueModel)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_DELETE_CONVERSATION_BASED_ON_ID', aiMarketingFlowDeleteConversationBasedOnIdFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_DELETE_CONVERSATION_BASED_ON_ID', JSON.parse(JSON.stringify(aiMarketingFlowDeleteConversationBasedOnId)))
  register('@com.horsecoder.platform.mall.aiMarketing/FLOW_CODE_QUERY_CONVERSATION_HISTORY', aiMarketingFlowQueryConversationHistoryFacade);
  load('@com.horsecoder.platform.mall.aiMarketing/FLOW_QUERY_CONVERSATION_HISTORY', JSON.parse(JSON.stringify(aiMarketingFlowQueryConversationHistory)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_FILTER_PRODUCT_LIST_INCLUDING_SPECIFICATIONS', mallFlowFilterProductListIncludingSpecificationsFacade);
  load('@com.horsecoder.platform.mall/FLOW_FILTER_PRODUCT_LIST_INCLUDING_SPECIFICATIONS', JSON.parse(JSON.stringify(mallFlowFilterProductListIncludingSpecifications)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_DELETE_PRODUCT', mallFlowDeleteProductFacade);
  load('@com.horsecoder.platform.mall/FLOW_DELETE_PRODUCT', JSON.parse(JSON.stringify(mallFlowDeleteProduct)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_QUERY_SHOPPING_CART_PRODUCT_LIST_AND_PURCHASED_PRODUCT_LIST_FOR_MALL_USER', mallFlowQueryShoppingCartProductListAndPurchasedProductListForMallUserFacade);
  load('@com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_AND_PURCHASED_PRODUCT_LIST_FOR_MALL_USER', JSON.parse(JSON.stringify(mallFlowQueryShoppingCartProductListAndPurchasedProductListForMallUser)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_SEARCH_SHOPPING_CART_BASED_ON_MALL_USER_ID', mallFlowSearchShoppingCartBasedOnMallUserIdFacade);
  load('@com.horsecoder.platform.mall/FLOW_SEARCH_SHOPPING_CART_BASED_ON_MALL_USER_ID', JSON.parse(JSON.stringify(mallFlowSearchShoppingCartBasedOnMallUserId)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_QUERY_SHOPPING_CART_PRODUCT_LIST_FOR_MALL_USER', mallFlowQueryShoppingCartProductListForMallUserFacade);
  load('@com.horsecoder.platform.mall/FLOW_QUERY_SHOPPING_CART_PRODUCT_LIST_FOR_MALL_USER', JSON.parse(JSON.stringify(mallFlowQueryShoppingCartProductListForMallUser)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_TRY_SHOPPING_CART_PRODUCTS', mallFlowTryShoppingCartProductsFacade);
  load('@com.horsecoder.platform.mall/FLOW_TRY_SHOPPING_CART_PRODUCTS', JSON.parse(JSON.stringify(mallFlowTryShoppingCartProducts)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_LISTING_PRODUCT', mallFlowListingProductFacade);
  load('@com.horsecoder.platform.mall/FLOW_LISTING_PRODUCT', JSON.parse(JSON.stringify(mallFlowListingProduct)))
  register('@com.horsecoder.platform.mall/FLOW_CODE_CREATE_MALL_USERS_AND_OPEN_MARKET_AND_PAYMENT_ACCOUNTS', mallFlowCreateMallUsersAndOpenMarketAndPaymentAccountsFacade);
  load('@com.horsecoder.platform.mall/FLOW_CREATE_MALL_USERS_AND_OPEN_MARKET_AND_PAYMENT_ACCOUNTS', JSON.parse(JSON.stringify(mallFlowCreateMallUsersAndOpenMarketAndPaymentAccounts)))
  register('@com.horsecoder.pay/FLOW_CODE_ALIPAY_PERIODIC_DEDUCTION_SIGNING', payFlowAlipayPeriodicDeductionSigningFacade);
  load('@com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_SIGNING', JSON.parse(JSON.stringify(payFlowAlipayPeriodicDeductionSigning)))
  register('@com.horsecoder.pay/FLOW_CODE_QUERY_SUBSCRIPTION_STATUS', payFlowQuerySubscriptionStatusFacade);
  load('@com.horsecoder.pay/FLOW_QUERY_SUBSCRIPTION_STATUS', JSON.parse(JSON.stringify(payFlowQuerySubscriptionStatus)))
  register('@com.horsecoder.pay/FLOW_CODE_OBTAIN_PAYMENT_ACCOUNT_DETAILS', payFlowObtainPaymentAccountDetailsFacade);
  load('@com.horsecoder.pay/FLOW_OBTAIN_PAYMENT_ACCOUNT_DETAILS', JSON.parse(JSON.stringify(payFlowObtainPaymentAccountDetails)))
  register('@com.horsecoder.pay/FLOW_CODE_RESTORE_SUBSCRIPTION', payFlowRestoreSubscriptionFacade);
  load('@com.horsecoder.pay/FLOW_RESTORE_SUBSCRIPTION', JSON.parse(JSON.stringify(payFlowRestoreSubscription)))
  register('@com.horsecoder.pay/FLOW_CODE_SUBSCRIPTION_SIGN_UP', payFlowSubscriptionSignUpFacade);
  load('@com.horsecoder.pay/FLOW_SUBSCRIPTION_SIGN_UP', JSON.parse(JSON.stringify(payFlowSubscriptionSignUp)))
  register('@com.horsecoder.pay/FLOW_CODE_CREATE_PAYMENT_ORDER', payFlowCreatePaymentOrderFacade);
  load('@com.horsecoder.pay/FLOW_CREATE_PAYMENT_ORDER', JSON.parse(JSON.stringify(payFlowCreatePaymentOrder)))
  register('@com.horsecoder.pay/FLOW_CODE_TERMINATION_OF_ALIPAY', payFlowTerminationOfAlipayFacade);
  load('@com.horsecoder.pay/FLOW_TERMINATION_OF_ALIPAY', JSON.parse(JSON.stringify(payFlowTerminationOfAlipay)))
  register('@com.horsecoder.pay/FLOW_CODE_CREATE_PAYMENT_ACCOUNT', payFlowCreatePaymentAccountFacade);
  load('@com.horsecoder.pay/FLOW_CREATE_PAYMENT_ACCOUNT', JSON.parse(JSON.stringify(payFlowCreatePaymentAccount)))
  register('@com.horsecoder.pay/FLOW_CODE_UNSUBSCRIBE', payFlowUnsubscribeFacade);
  load('@com.horsecoder.pay/FLOW_UNSUBSCRIBE', JSON.parse(JSON.stringify(payFlowUnsubscribe)))
  register('@com.horsecoder.pay/FLOW_CODE_CANCEL_PAYMENT_ORDER', payFlowCancelPaymentOrderFacade);
  load('@com.horsecoder.pay/FLOW_CANCEL_PAYMENT_ORDER', JSON.parse(JSON.stringify(payFlowCancelPaymentOrder)))
  register('@com.horsecoder.pay/FLOW_CODE_VERIFY_ORDER_COMPLETED_BASED_ON_ORDER_NUMBER', payFlowVerifyOrderCompletedBasedOnOrderNumberFacade);
  load('@com.horsecoder.pay/FLOW_VERIFY_ORDER_COMPLETED_BASED_ON_ORDER_NUMBER', JSON.parse(JSON.stringify(payFlowVerifyOrderCompletedBasedOnOrderNumber)))
  register('@com.horsecoder.pay/FLOW_CODE_PAY_BASED_ON_ORDER_NUMBER', payFlowPayBasedOnOrderNumberFacade);
  load('@com.horsecoder.pay/FLOW_PAY_BASED_ON_ORDER_NUMBER', JSON.parse(JSON.stringify(payFlowPayBasedOnOrderNumber)))
  register('@com.horsecoder.pay/FLOW_CODE_QUERY_ORDER_TYPE_BASED_ON_ORDER_NUMBER', payFlowQueryOrderTypeBasedOnOrderNumberFacade);
  load('@com.horsecoder.pay/FLOW_QUERY_ORDER_TYPE_BASED_ON_ORDER_NUMBER', JSON.parse(JSON.stringify(payFlowQueryOrderTypeBasedOnOrderNumber)))
  register('@com.horsecoder.pay/FLOW_CODE_WE_CHAT_ENTRUSTED_SIGNING', payFlowWeChatEntrustedSigningFacade);
  load('@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_SIGNING', JSON.parse(JSON.stringify(payFlowWeChatEntrustedSigning)))
  register('@com.horsecoder.pay/FLOW_CODE_WE_CHAT_ENTRUSTED_WITHHOLDING_AND_TERMINATION_OF_CONTRACT', payFlowWeChatEntrustedWithholdingAndTerminationOfContractFacade);
  load('@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_AND_TERMINATION_OF_CONTRACT', JSON.parse(JSON.stringify(payFlowWeChatEntrustedWithholdingAndTerminationOfContract)))
  register('@com.horsecoder.pay/FLOW_CODE_ALIPAY_PERIODIC_DEDUCTION_EXECUTION', payFlowAlipayPeriodicDeductionExecutionFacade);
  load('@com.horsecoder.pay/FLOW_ALIPAY_PERIODIC_DEDUCTION_EXECUTION', JSON.parse(JSON.stringify(payFlowAlipayPeriodicDeductionExecution)))
  register('@com.horsecoder.pay/FLOW_CODE_WE_CHAT_ENTRUSTED_WITHHOLDING_EXECUTION', payFlowWeChatEntrustedWithholdingExecutionFacade);
  load('@com.horsecoder.pay/FLOW_WE_CHAT_ENTRUSTED_WITHHOLDING_EXECUTION', JSON.parse(JSON.stringify(payFlowWeChatEntrustedWithholdingExecution)))
  register('@com.horsecoder.pay/FLOW_CODE_PAY_ORDER_AND_PERFORM_REAL_TIME_LIQUIDATION', payFlowPayOrderAndPerformRealTimeLiquidationFacade);
  load('@com.horsecoder.pay/FLOW_PAY_ORDER_AND_PERFORM_REAL_TIME_LIQUIDATION', JSON.parse(JSON.stringify(payFlowPayOrderAndPerformRealTimeLiquidation)))
  register('@com.horsecoder.pay/FLOW_CODE_QUERY_ORDER_DETAILS_BASED_ON_ORDER_NUMBER', payFlowQueryOrderDetailsBasedOnOrderNumberFacade);
  load('@com.horsecoder.pay/FLOW_QUERY_ORDER_DETAILS_BASED_ON_ORDER_NUMBER', JSON.parse(JSON.stringify(payFlowQueryOrderDetailsBasedOnOrderNumber)))
  register('@com.horsecoder.pay/FLOW_CODE_QUERY_ORDER_PAYMENT_STATUS_BASED_ON_ID', payFlowQueryOrderPaymentStatusBasedOnIdFacade);
  load('@com.horsecoder.pay/FLOW_QUERY_ORDER_PAYMENT_STATUS_BASED_ON_ID', JSON.parse(JSON.stringify(payFlowQueryOrderPaymentStatusBasedOnId)))
  register('@com.horsecoder.identity/FLOW_CODE_CREATE_DATA_INTELLIGENCE_PLATFORM_USER', identityFlowCreateDataIntelligencePlatformUserFacade);
  load('@com.horsecoder.identity/FLOW_CREATE_DATA_INTELLIGENCE_PLATFORM_USER', JSON.parse(JSON.stringify(identityFlowCreateDataIntelligencePlatformUser)))
  register('@com.horsecoder.identity/FLOW_CODE_CREATE_SPACE_AND_UPDATE_MODEL_SPACE', identityFlowCreateSpaceAndUpdateModelSpaceFacade);
  load('@com.horsecoder.identity/FLOW_CREATE_SPACE_AND_UPDATE_MODEL_SPACE', JSON.parse(JSON.stringify(identityFlowCreateSpaceAndUpdateModelSpace)))
  register('@com.horsecoder.identity/FLOW_CODE_DISABLED_USER', identityFlowDisabledUserFacade);
  load('@com.horsecoder.identity/FLOW_DISABLED_USER', JSON.parse(JSON.stringify(identityFlowDisabledUser)))
  register('@com.horsecoder.identity/FLOW_CODE_ENTERING_SPACE', identityFlowEnteringSpaceFacade);
  load('@com.horsecoder.identity/FLOW_ENTERING_SPACE', JSON.parse(JSON.stringify(identityFlowEnteringSpace)))
  register('@com.horsecoder.identity/FLOW_CODE_GET_USER_SPACE_LIST', identityFlowGetUserSpaceListFacade);
  load('@com.horsecoder.identity/FLOW_GET_USER_SPACE_LIST', JSON.parse(JSON.stringify(identityFlowGetUserSpaceList)))
  register('@com.horsecoder.identity/FLOW_CODE_LOGIN', identityFlowLoginFacade);
  load('@com.horsecoder.identity/FLOW_LOGIN', JSON.parse(JSON.stringify(identityFlowLogin)))
  register('@com.horsecoder.identity/FLOW_CODE_OBTAINING_VERIFICATION_CODES_WITHOUT_VERIFYING_USERS', identityFlowObtainingVerificationCodesWithoutVerifyingUsersFacade);
  load('@com.horsecoder.identity/FLOW_OBTAINING_VERIFICATION_CODES_WITHOUT_VERIFYING_USERS', JSON.parse(JSON.stringify(identityFlowObtainingVerificationCodesWithoutVerifyingUsers)))
  register('@com.horsecoder.identity/FLOW_CODE_OBTAIN_BUSINESS_DESIGN_ACCOUNT_INFORMATION_BASED_ON_ID', identityFlowObtainBusinessDesignAccountInformationBasedOnIdFacade);
  load('@com.horsecoder.identity/FLOW_OBTAIN_BUSINESS_DESIGN_ACCOUNT_INFORMATION_BASED_ON_ID', JSON.parse(JSON.stringify(identityFlowObtainBusinessDesignAccountInformationBasedOnId)))
  register('@com.horsecoder.identity/FLOW_CODE_OBTAIN_CAPTCHA', identityFlowObtainCaptchaFacade);
  load('@com.horsecoder.identity/FLOW_OBTAIN_CAPTCHA', JSON.parse(JSON.stringify(identityFlowObtainCaptcha)))
  register('@com.horsecoder.identity/FLOW_CODE_OBTAIN_IMAGE_VERIFICATION_CODE', identityFlowObtainImageVerificationCodeFacade);
  load('@com.horsecoder.identity/FLOW_OBTAIN_IMAGE_VERIFICATION_CODE', JSON.parse(JSON.stringify(identityFlowObtainImageVerificationCode)))
  register('@com.horsecoder.identity/FLOW_CODE_OBTAIN_LOGIN_VERIFICATION_CODE', identityFlowObtainLoginVerificationCodeFacade);
  load('@com.horsecoder.identity/FLOW_OBTAIN_LOGIN_VERIFICATION_CODE', JSON.parse(JSON.stringify(identityFlowObtainLoginVerificationCode)))
  register('@com.horsecoder.identity/FLOW_CODE_REGISTER_BUSINESS_DESIGN_ACCOUNT', identityFlowRegisterBusinessDesignAccountFacade);
  load('@com.horsecoder.identity/FLOW_REGISTER_BUSINESS_DESIGN_ACCOUNT', JSON.parse(JSON.stringify(identityFlowRegisterBusinessDesignAccount)))
  register('@com.horsecoder.identity/FLOW_CODE_RETRIEVE_LIST_OF_USERS_ON_MANAGEMENT_END', identityFlowRetrieveListOfUsersOnManagementEndFacade);
  load('@com.horsecoder.identity/FLOW_RETRIEVE_LIST_OF_USERS_ON_MANAGEMENT_END', JSON.parse(JSON.stringify(identityFlowRetrieveListOfUsersOnManagementEnd)))
  register('@com.horsecoder.identity/FLOW_CODE_UPDATE_SPACE_WHICH_MODEL_BELONGS', identityFlowUpdateSpaceWhichModelBelongsFacade);
  load('@com.horsecoder.identity/FLOW_UPDATE_SPACE_WHICH_MODEL_BELONGS', JSON.parse(JSON.stringify(identityFlowUpdateSpaceWhichModelBelongs)))
  register('@com.horsecoder.identity/FLOW_CODE_USER_LOGIN_VERIFICATION', identityFlowUserLoginVerificationFacade);
  load('@com.horsecoder.identity/FLOW_USER_LOGIN_VERIFICATION', JSON.parse(JSON.stringify(identityFlowUserLoginVerification)))
  register('@com.horsecoder.identity/FLOW_CODE_VERIFICATION_CODE_LOGIN', identityFlowVerificationCodeLoginFacade);
  load('@com.horsecoder.identity/FLOW_VERIFICATION_CODE_LOGIN', JSON.parse(JSON.stringify(identityFlowVerificationCodeLogin)))
  register('@com.horsecoder.identity/FLOW_CODE_WE_CHAT_BINDING_PHONE_NUMBER', identityFlowWeChatBindingPhoneNumberFacade);
  load('@com.horsecoder.identity/FLOW_WE_CHAT_BINDING_PHONE_NUMBER', JSON.parse(JSON.stringify(identityFlowWeChatBindingPhoneNumber)))
  register('@com.horsecoder.identity/FLOW_CODE_WE_CHAT_CALLBACK_RETRIEVE_USER_INFORMATION', identityFlowWeChatCallbackRetrieveUserInformationFacade);
  load('@com.horsecoder.identity/FLOW_WE_CHAT_CALLBACK_RETRIEVE_USER_INFORMATION', JSON.parse(JSON.stringify(identityFlowWeChatCallbackRetrieveUserInformation)))
  register('@com.horsecoder.im/FLOW_CODE_BATCH_REGISTRATION_OF_I_M_USER_INFORMATION', imFlowBatchRegistrationOfIMUserInformationFacade);
  load('@com.horsecoder.im/FLOW_BATCH_REGISTRATION_OF_I_M_USER_INFORMATION', JSON.parse(JSON.stringify(imFlowBatchRegistrationOfIMUserInformation)))
  register('@com.horsecoder.im/FLOW_CODE_BATCH_UPDATE_IM_CALLBACK_INFORMATION', imFlowBatchUpdateImCallbackInformationFacade);
  load('@com.horsecoder.im/FLOW_BATCH_UPDATE_IM_CALLBACK_INFORMATION', JSON.parse(JSON.stringify(imFlowBatchUpdateImCallbackInformation)))
  register('@com.horsecoder.im/FLOW_CODE_DELETE_CONVERSATION', imFlowDeleteConversationFacade);
  load('@com.horsecoder.im/FLOW_DELETE_CONVERSATION', JSON.parse(JSON.stringify(imFlowDeleteConversation)))
  register('@com.horsecoder.im/FLOW_CODE_GET_ALL_USER_IDS_FOR_SESSION', imFlowGetAllUserIdsForSessionFacade);
  load('@com.horsecoder.im/FLOW_GET_ALL_USER_IDS_FOR_SESSION', JSON.parse(JSON.stringify(imFlowGetAllUserIdsForSession)))
  register('@com.horsecoder.im/FLOW_CODE_IM_USERS_RECEIVE_MESSAGES', imFlowImUsersReceiveMessagesFacade);
  load('@com.horsecoder.im/FLOW_IM_USERS_RECEIVE_MESSAGES', JSON.parse(JSON.stringify(imFlowImUsersReceiveMessages)))
  register('@com.horsecoder.im/FLOW_CODE_IM_USER_CREATE_SESSIONS_AND_CONVERSATIONS', imFlowImUserCreateSessionsAndConversationsFacade);
  load('@com.horsecoder.im/FLOW_IM_USER_CREATE_SESSIONS_AND_CONVERSATIONS', JSON.parse(JSON.stringify(imFlowImUserCreateSessionsAndConversations)))
  register('@com.horsecoder.im/FLOW_CODE_MIGRATION_OF_IM_USER_SESSION', imFlowMigrationOfImUserSessionFacade);
  load('@com.horsecoder.im/FLOW_MIGRATION_OF_IM_USER_SESSION', JSON.parse(JSON.stringify(imFlowMigrationOfImUserSession)))
  register('@com.horsecoder.im/FLOW_CODE_QUERY_CHAT_RECORDS_WITHOUT_PAGINATION_BASED_ON_ID', imFlowQueryChatRecordsWithoutPaginationBasedOnIdFacade);
  load('@com.horsecoder.im/FLOW_QUERY_CHAT_RECORDS_WITHOUT_PAGINATION_BASED_ON_ID', JSON.parse(JSON.stringify(imFlowQueryChatRecordsWithoutPaginationBasedOnId)))
  register('@com.horsecoder.im/FLOW_CODE_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID', imFlowQueryUserConversationListBasedOnUserIdFacade);
  load('@com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID', JSON.parse(JSON.stringify(imFlowQueryUserConversationListBasedOnUserId)))
  register('@com.horsecoder.im/FLOW_CODE_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID_LIST', imFlowQueryUserConversationListBasedOnUserIdListFacade);
  load('@com.horsecoder.im/FLOW_QUERY_USER_CONVERSATION_LIST_BASED_ON_USER_ID_LIST', JSON.parse(JSON.stringify(imFlowQueryUserConversationListBasedOnUserIdList)))
  register('@com.horsecoder.im/FLOW_CODE_REGISTER_AND_SAVE_I_M_USER_INFORMATION', imFlowRegisterAndSaveIMUserInformationFacade);
  load('@com.horsecoder.im/FLOW_REGISTER_AND_SAVE_I_M_USER_INFORMATION', JSON.parse(JSON.stringify(imFlowRegisterAndSaveIMUserInformation)))
  register('@com.horsecoder.im/FLOW_CODE_RETRIEVE_CONVERSATION_INFORMATION_AND_LAST_MESSAGE_BASED_ON_CONVERSATION_ID', imFlowRetrieveConversationInformationAndLastMessageBasedOnConversationIdFacade);
  load('@com.horsecoder.im/FLOW_RETRIEVE_CONVERSATION_INFORMATION_AND_LAST_MESSAGE_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(imFlowRetrieveConversationInformationAndLastMessageBasedOnConversationId)))
  register('@com.horsecoder.im/FLOW_CODE_SAVE_IM_MESSAGE', imFlowSaveImMessageFacade);
  load('@com.horsecoder.im/FLOW_SAVE_IM_MESSAGE', JSON.parse(JSON.stringify(imFlowSaveImMessage)))
  register('@com.horsecoder.im/FLOW_CODE_SEARCH_FOR_GROUP_CHAT_NAMES_BASED_ON_CONVERSATION_ID_LIST', imFlowSearchForGroupChatNamesBasedOnConversationIdListFacade);
  load('@com.horsecoder.im/FLOW_SEARCH_FOR_GROUP_CHAT_NAMES_BASED_ON_CONVERSATION_ID_LIST', JSON.parse(JSON.stringify(imFlowSearchForGroupChatNamesBasedOnConversationIdList)))
  register('@com.horsecoder.im/FLOW_CODE_SEARCH_IM_CHAT_RECORDS_BASED_ON_ID', imFlowSearchImChatRecordsBasedOnIdFacade);
  load('@com.horsecoder.im/FLOW_SEARCH_IM_CHAT_RECORDS_BASED_ON_ID', JSON.parse(JSON.stringify(imFlowSearchImChatRecordsBasedOnId)))
  register('@com.horsecoder.im/FLOW_CODE_UPDATE_I_M_CALLBACK_INFORMATION', imFlowUpdateIMCallbackInformationFacade);
  load('@com.horsecoder.im/FLOW_UPDATE_I_M_CALLBACK_INFORMATION', JSON.parse(JSON.stringify(imFlowUpdateIMCallbackInformation)))
  register('@com.horsecoder.im/FLOW_CODE_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', imFlowUpdateNicknameDictionaryBasedOnSenderIdListFacade);
  load('@com.horsecoder.im/FLOW_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', JSON.parse(JSON.stringify(imFlowUpdateNicknameDictionaryBasedOnSenderIdList)))
  register('@com.horsecoder.market/FLOW_CODE_ADD_AND_MODIFY_POINTS', marketFlowAddAndModifyPointsFacade);
  load('@com.horsecoder.market/FLOW_ADD_AND_MODIFY_POINTS', JSON.parse(JSON.stringify(marketFlowAddAndModifyPoints)))
  register('@com.horsecoder.market/FLOW_CODE_ADD_POINTS_CHANGE_LOG', marketFlowAddPointsChangeLogFacade);
  load('@com.horsecoder.market/FLOW_ADD_POINTS_CHANGE_LOG', JSON.parse(JSON.stringify(marketFlowAddPointsChangeLog)))
  register('@com.horsecoder.market/FLOW_CODE_BATCH_CREATION_OF_PRODUCTS_ANDIR_DEPENDENCIES', marketFlowBatchCreationOfProductsAndirDependenciesFacade);
  load('@com.horsecoder.market/FLOW_BATCH_CREATION_OF_PRODUCTS_ANDIR_DEPENDENCIES', JSON.parse(JSON.stringify(marketFlowBatchCreationOfProductsAndirDependencies)))
  register('@com.horsecoder.market/FLOW_CODE_BATCH_REMOVAL_OF_PRODUCTS', marketFlowBatchRemovalOfProductsFacade);
  load('@com.horsecoder.market/FLOW_BATCH_REMOVAL_OF_PRODUCTS', JSON.parse(JSON.stringify(marketFlowBatchRemovalOfProducts)))
  register('@com.horsecoder.market/FLOW_CODE_CALCULATE_ORDER_PRICE', marketFlowCalculateOrderPriceFacade);
  load('@com.horsecoder.market/FLOW_CALCULATE_ORDER_PRICE', JSON.parse(JSON.stringify(marketFlowCalculateOrderPrice)))
  register('@com.horsecoder.market/FLOW_CODE_CREATE_EDIT_PACKAGE', marketFlowCreateEditPackageFacade);
  load('@com.horsecoder.market/FLOW_CREATE_EDIT_PACKAGE', JSON.parse(JSON.stringify(marketFlowCreateEditPackage)))
  register('@com.horsecoder.market/FLOW_CODE_CREATE_EDIT_POINTS_CONSUMPTION_SPECIFICATION', marketFlowCreateEditPointsConsumptionSpecificationFacade);
  load('@com.horsecoder.market/FLOW_CREATE_EDIT_POINTS_CONSUMPTION_SPECIFICATION', JSON.parse(JSON.stringify(marketFlowCreateEditPointsConsumptionSpecification)))
  register('@com.horsecoder.market/FLOW_CODE_CREATE_MARKETING_ACCOUNT_AND_OPEN_PAYMENT_ACCOUNT', marketFlowCreateMarketingAccountAndOpenPaymentAccountFacade);
  load('@com.horsecoder.market/FLOW_CREATE_MARKETING_ACCOUNT_AND_OPEN_PAYMENT_ACCOUNT', JSON.parse(JSON.stringify(marketFlowCreateMarketingAccountAndOpenPaymentAccount)))
  register('@com.horsecoder.market/FLOW_CODE_CREATE_PRODUCT_DEPENDENCIES', marketFlowCreateProductDependenciesFacade);
  load('@com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES', JSON.parse(JSON.stringify(marketFlowCreateProductDependencies)))
  register('@com.horsecoder.market/FLOW_CODE_CREATE_PRODUCT_DEPENDENCIES_BASED_ON_PRODUCT_CODES', marketFlowCreateProductDependenciesBasedOnProductCodesFacade);
  load('@com.horsecoder.market/FLOW_CREATE_PRODUCT_DEPENDENCIES_BASED_ON_PRODUCT_CODES', JSON.parse(JSON.stringify(marketFlowCreateProductDependenciesBasedOnProductCodes)))
  register('@com.horsecoder.market/FLOW_CODE_DELETE_PACKAGE_BASED_ON_ID', marketFlowDeletePackageBasedOnIdFacade);
  load('@com.horsecoder.market/FLOW_DELETE_PACKAGE_BASED_ON_ID', JSON.parse(JSON.stringify(marketFlowDeletePackageBasedOnId)))
  register('@com.horsecoder.market/FLOW_CODE_DELETE_POINTS', marketFlowDeletePointsFacade);
  load('@com.horsecoder.market/FLOW_DELETE_POINTS', JSON.parse(JSON.stringify(marketFlowDeletePoints)))
  register('@com.horsecoder.market/FLOW_CODE_DELETE_POINTS_CONSUMPTION_SPECIFICATION_BASED_ON_ID', marketFlowDeletePointsConsumptionSpecificationBasedOnIdFacade);
  load('@com.horsecoder.market/FLOW_DELETE_POINTS_CONSUMPTION_SPECIFICATION_BASED_ON_ID', JSON.parse(JSON.stringify(marketFlowDeletePointsConsumptionSpecificationBasedOnId)))
  register('@com.horsecoder.market/FLOW_CODE_MODIFY_PACKAGE_STATUS', marketFlowModifyPackageStatusFacade);
  load('@com.horsecoder.market/FLOW_MODIFY_PACKAGE_STATUS', JSON.parse(JSON.stringify(marketFlowModifyPackageStatus)))
  register('@com.horsecoder.market/FLOW_CODE_OBTAIN_LIST_OF_PRODUCTS_WITH_DEPENDENCIES', marketFlowObtainListOfProductsWithDependenciesFacade);
  load('@com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PRODUCTS_WITH_DEPENDENCIES', JSON.parse(JSON.stringify(marketFlowObtainListOfProductsWithDependencies)))
  register('@com.horsecoder.market/FLOW_CODE_OBTAIN_LIST_OF_PURCHASED_PRODUCTS_FOR_ACCOUNT', marketFlowObtainListOfPurchasedProductsForAccountFacade);
  load('@com.horsecoder.market/FLOW_OBTAIN_LIST_OF_PURCHASED_PRODUCTS_FOR_ACCOUNT', JSON.parse(JSON.stringify(marketFlowObtainListOfPurchasedProductsForAccount)))
  register('@com.horsecoder.market/FLOW_CODE_PACKAGE_PAGINATION_QUERY', marketFlowPackagePaginationQueryFacade);
  load('@com.horsecoder.market/FLOW_PACKAGE_PAGINATION_QUERY', JSON.parse(JSON.stringify(marketFlowPackagePaginationQuery)))
  register('@com.horsecoder.market/FLOW_CODE_QUERY_LIST_OF_USER_POINTS_CHANGE_LOGS', marketFlowQueryListOfUserPointsChangeLogsFacade);
  load('@com.horsecoder.market/FLOW_QUERY_LIST_OF_USER_POINTS_CHANGE_LOGS', JSON.parse(JSON.stringify(marketFlowQueryListOfUserPointsChangeLogs)))
  register('@com.horsecoder.market/FLOW_CODE_QUERY_PACKAGE_BASED_ON_ID', marketFlowQueryPackageBasedOnIdFacade);
  load('@com.horsecoder.market/FLOW_QUERY_PACKAGE_BASED_ON_ID', JSON.parse(JSON.stringify(marketFlowQueryPackageBasedOnId)))
  register('@com.horsecoder.market/FLOW_CODE_QUERY_POINTS_BASED_ON_USER_ID', marketFlowQueryPointsBasedOnUserIdFacade);
  load('@com.horsecoder.market/FLOW_QUERY_POINTS_BASED_ON_USER_ID', JSON.parse(JSON.stringify(marketFlowQueryPointsBasedOnUserId)))
  register('@com.horsecoder.market/FLOW_CODE_QUERY_POINT_CONSUMPTION_STANDARDS_BASED_ON_ID', marketFlowQueryPointConsumptionStandardsBasedOnIdFacade);
  load('@com.horsecoder.market/FLOW_QUERY_POINT_CONSUMPTION_STANDARDS_BASED_ON_ID', JSON.parse(JSON.stringify(marketFlowQueryPointConsumptionStandardsBasedOnId)))
  register('@com.horsecoder.market/FLOW_CODE_QUERY_POINT_DETAILS_BASED_ON_POINT_ID', marketFlowQueryPointDetailsBasedOnPointIdFacade);
  load('@com.horsecoder.market/FLOW_QUERY_POINT_DETAILS_BASED_ON_POINT_ID', JSON.parse(JSON.stringify(marketFlowQueryPointDetailsBasedOnPointId)))
  register('@com.horsecoder.market/FLOW_CODE_STANDARD_PAGINATION_QUERY_FOR_POINT_CONSUMPTION', marketFlowStandardPaginationQueryForPointConsumptionFacade);
  load('@com.horsecoder.market/FLOW_STANDARD_PAGINATION_QUERY_FOR_POINT_CONSUMPTION', JSON.parse(JSON.stringify(marketFlowStandardPaginationQueryForPointConsumption)))
  register('@com.horsecoder.market/FLOW_CODE_SUBMIT_PRODUCT_ORDERS', marketFlowSubmitProductOrdersFacade);
  load('@com.horsecoder.market/FLOW_SUBMIT_PRODUCT_ORDERS', JSON.parse(JSON.stringify(marketFlowSubmitProductOrders)))
  register('@com.horsecoder.market/FLOW_CODE_UPDATE_CURRENT_USER_POINTS', marketFlowUpdateCurrentUserPointsFacade);
  load('@com.horsecoder.market/FLOW_UPDATE_CURRENT_USER_POINTS', JSON.parse(JSON.stringify(marketFlowUpdateCurrentUserPoints)))
  register('@com.horsecoder.market/FLOW_CODE_UPDATE_PRODUCT_ORDER_STATUS_BASED_ON_PAYMENT_ORDER_STATUS_AFTER_PAYMENT', marketFlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPaymentFacade);
  load('@com.horsecoder.market/FLOW_UPDATE_PRODUCT_ORDER_STATUS_BASED_ON_PAYMENT_ORDER_STATUS_AFTER_PAYMENT', JSON.parse(JSON.stringify(marketFlowUpdateProductOrderStatusBasedOnPaymentOrderStatusAfterPayment)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_LISTING_STATUS_OF_DEPENDENCIES_BASED_ON_PRODUCT_CODE_LIST', marketFlowVerifyListingStatusOfDependenciesBasedOnProductCodeListFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_LISTING_STATUS_OF_DEPENDENCIES_BASED_ON_PRODUCT_CODE_LIST', JSON.parse(JSON.stringify(marketFlowVerifyListingStatusOfDependenciesBasedOnProductCodeList)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS', marketFlowVerifyOnoffStatusOfProductsAndDependentProductsFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS', JSON.parse(JSON.stringify(marketFlowVerifyOnoffStatusOfProductsAndDependentProducts)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS_BASED_ON_PRODUCT_CODES', marketFlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodesFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_ONOFF_STATUS_OF_PRODUCTS_AND_DEPENDENT_PRODUCTS_BASED_ON_PRODUCT_CODES', JSON.parse(JSON.stringify(marketFlowVerifyOnoffStatusOfProductsAndDependentProductsBasedOnProductCodes)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_ORDER_PRODUCTS_AND_CALCULATE_ORDER_PRICES', marketFlowVerifyOrderProductsAndCalculateOrderPricesFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_ORDER_PRODUCTS_AND_CALCULATE_ORDER_PRICES', JSON.parse(JSON.stringify(marketFlowVerifyOrderProductsAndCalculateOrderPrices)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_PRODUCT_LIST_HAS_BEEN_SETTLED', marketFlowVerifyProductListHasBeenSettledFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_PRODUCT_LIST_HAS_BEEN_SETTLED', JSON.parse(JSON.stringify(marketFlowVerifyProductListHasBeenSettled)))
  register('@com.horsecoder.market/FLOW_CODE_VERIFY_STATUS_OF_PRODUCT_LISTING_AND_DELISTING', marketFlowVerifyStatusOfProductListingAndDelistingFacade);
  load('@com.horsecoder.market/FLOW_VERIFY_STATUS_OF_PRODUCT_LISTING_AND_DELISTING', JSON.parse(JSON.stringify(marketFlowVerifyStatusOfProductListingAndDelisting)))
  register('@com.horsecoder.model/FLOW_CODE_BATCH_CREATION_OF_MODEL_FILES', modelFlowBatchCreationOfModelFilesFacade);
  load('@com.horsecoder.model/FLOW_BATCH_CREATION_OF_MODEL_FILES', JSON.parse(JSON.stringify(modelFlowBatchCreationOfModelFiles)))
  register('@com.horsecoder.model/FLOW_CODE_BATCH_UNLOCK_ALL_LOCKED_MODELS_FOR_USERS', modelFlowBatchUnlockAllLockedModelsForUsersFacade);
  load('@com.horsecoder.model/FLOW_BATCH_UNLOCK_ALL_LOCKED_MODELS_FOR_USERS', JSON.parse(JSON.stringify(modelFlowBatchUnlockAllLockedModelsForUsers)))
  register('@com.horsecoder.model/FLOW_CODE_CREATE_MODEL', modelFlowCreateModelFacade);
  load('@com.horsecoder.model/FLOW_CREATE_MODEL', JSON.parse(JSON.stringify(modelFlowCreateModel)))
  register('@com.horsecoder.model/FLOW_CODE_CREATE_MODELS_AND_PRODUCTS', modelFlowCreateModelsAndProductsFacade);
  load('@com.horsecoder.model/FLOW_CREATE_MODELS_AND_PRODUCTS', JSON.parse(JSON.stringify(modelFlowCreateModelsAndProducts)))
  register('@com.horsecoder.model/FLOW_CODE_CREATE_MODEL_JSON_BASED_ON_URL', modelFlowCreateModelJsonBasedOnUrlFacade);
  load('@com.horsecoder.model/FLOW_CREATE_MODEL_JSON_BASED_ON_URL', JSON.parse(JSON.stringify(modelFlowCreateModelJsonBasedOnUrl)))
  register('@com.horsecoder.model/FLOW_CODE_DOWNLOAD_MODEL', modelFlowDownloadModelFacade);
  load('@com.horsecoder.model/FLOW_DOWNLOAD_MODEL', JSON.parse(JSON.stringify(modelFlowDownloadModel)))
  register('@com.horsecoder.model/FLOW_CODE_FILTER_LIST_OF_MODEL_FILES_BASED_ON_CRITERIA', modelFlowFilterListOfModelFilesBasedOnCriteriaFacade);
  load('@com.horsecoder.model/FLOW_FILTER_LIST_OF_MODEL_FILES_BASED_ON_CRITERIA', JSON.parse(JSON.stringify(modelFlowFilterListOfModelFilesBasedOnCriteria)))
  register('@com.horsecoder.model/FLOW_CODE_FILTER_MODEL_DETAILS', modelFlowFilterModelDetailsFacade);
  load('@com.horsecoder.model/FLOW_FILTER_MODEL_DETAILS', JSON.parse(JSON.stringify(modelFlowFilterModelDetails)))
  register('@com.horsecoder.model/FLOW_CODE_JOIN_MODEL_PROJECT_ACCORDING_INVITATION_LINK', modelFlowJoinModelProjectAccordingInvitationLinkFacade);
  load('@com.horsecoder.model/FLOW_JOIN_MODEL_PROJECT_ACCORDING_INVITATION_LINK', JSON.parse(JSON.stringify(modelFlowJoinModelProjectAccordingInvitationLink)))
  register('@com.horsecoder.model/FLOW_CODE_NEW_MODEL_JSON', modelFlowNewModelJsonFacade);
  load('@com.horsecoder.model/FLOW_NEW_MODEL_JSON', JSON.parse(JSON.stringify(modelFlowNewModelJson)))
  register('@com.horsecoder.model/FLOW_CODE_OBTAIN_MODEL_ID_BASED_ON_PROJECT_ID', modelFlowObtainModelIdBasedOnProjectIdFacade);
  load('@com.horsecoder.model/FLOW_OBTAIN_MODEL_ID_BASED_ON_PROJECT_ID', JSON.parse(JSON.stringify(modelFlowObtainModelIdBasedOnProjectId)))
  register('@com.horsecoder.model/FLOW_CODE_TRANSLATE', modelFlowTranslateFacade);
  load('@com.horsecoder.model/FLOW_TRANSLATE', JSON.parse(JSON.stringify(modelFlowTranslate)))
  register('@com.horsecoder.model/FLOW_CODE_UPDATE_MODEL_SPACE', modelFlowUpdateModelSpaceFacade);
  load('@com.horsecoder.model/FLOW_UPDATE_MODEL_SPACE', JSON.parse(JSON.stringify(modelFlowUpdateModelSpace)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_BATCH_DOWNLOAD_EXECUTION_DIAGRAM', taskSchedulingFlowBatchDownloadExecutionDiagramFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_BATCH_DOWNLOAD_EXECUTION_DIAGRAM', JSON.parse(JSON.stringify(taskSchedulingFlowBatchDownloadExecutionDiagram)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_CALL_O_C_R_INTELLIGENT_AGENT', taskSchedulingFlowCallOCRIntelligentAgentFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CALL_O_C_R_INTELLIGENT_AGENT', JSON.parse(JSON.stringify(taskSchedulingFlowCallOCRIntelligentAgent)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_CANCEL_TASK', taskSchedulingFlowCancelTaskFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CANCEL_TASK', JSON.parse(JSON.stringify(taskSchedulingFlowCancelTask)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_DOWNLOAD_EXECUTION_DIAGRAM', taskSchedulingFlowDownloadExecutionDiagramFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_DOWNLOAD_EXECUTION_DIAGRAM', JSON.parse(JSON.stringify(taskSchedulingFlowDownloadExecutionDiagram)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_GET_TBOT_FLOW_INFORMATION_LIST', taskSchedulingFlowGetTbotFlowInformationListFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_GET_TBOT_FLOW_INFORMATION_LIST', JSON.parse(JSON.stringify(taskSchedulingFlowGetTbotFlowInformationList)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_INTELLIGENT_AGENT_PLANNING', taskSchedulingFlowIntelligentAgentPlanningFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_INTELLIGENT_AGENT_PLANNING', JSON.parse(JSON.stringify(taskSchedulingFlowIntelligentAgentPlanning)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_OPEN_TASK', taskSchedulingFlowOpenTaskFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_OPEN_TASK', JSON.parse(JSON.stringify(taskSchedulingFlowOpenTask)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_QUERY_DATA_BASED_ON_ID_LIST', taskSchedulingFlowQueryDataBasedOnIdListFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_DATA_BASED_ON_ID_LIST', JSON.parse(JSON.stringify(taskSchedulingFlowQueryDataBasedOnIdList)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_QUERY_EXECUTION_STATUS_BASED_ON_TASK_ID', taskSchedulingFlowQueryExecutionStatusBasedOnTaskIdFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_EXECUTION_STATUS_BASED_ON_TASK_ID', JSON.parse(JSON.stringify(taskSchedulingFlowQueryExecutionStatusBasedOnTaskId)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_QUERY_FILE_LIST_BASED_ON_TASK_LIST', taskSchedulingFlowQueryFileListBasedOnTaskListFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_FILE_LIST_BASED_ON_TASK_LIST', JSON.parse(JSON.stringify(taskSchedulingFlowQueryFileListBasedOnTaskList)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_QUERY_TASKS_CURRENTLY_BEING_EXECUTED_BY_USER', taskSchedulingFlowQueryTasksCurrentlyBeingExecutedByUserFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_QUERY_TASKS_CURRENTLY_BEING_EXECUTED_BY_USER', JSON.parse(JSON.stringify(taskSchedulingFlowQueryTasksCurrentlyBeingExecutedByUser)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_REMOVE_INTELLIGENT_AGENTS_FROM_SHELVES', taskSchedulingFlowRemoveIntelligentAgentsFromShelvesFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENTS_FROM_SHELVES', JSON.parse(JSON.stringify(taskSchedulingFlowRemoveIntelligentAgentsFromShelves)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_REMOVE_INTELLIGENT_AGENT_GROUP_FROM_SHELVES', taskSchedulingFlowRemoveIntelligentAgentGroupFromShelvesFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_REMOVE_INTELLIGENT_AGENT_GROUP_FROM_SHELVES', JSON.parse(JSON.stringify(taskSchedulingFlowRemoveIntelligentAgentGroupFromShelves)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_RUNNING_INTELLIGENT_AGENT', taskSchedulingFlowRunningIntelligentAgentFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUNNING_INTELLIGENT_AGENT', JSON.parse(JSON.stringify(taskSchedulingFlowRunningIntelligentAgent)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_RUN_INTELLIGENT_AGENT_GROUP', taskSchedulingFlowRunIntelligentAgentGroupFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_RUN_INTELLIGENT_AGENT_GROUP', JSON.parse(JSON.stringify(taskSchedulingFlowRunIntelligentAgentGroup)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_SCHEDULING_FILE_PARSING_AGENTS_FOR_SPECIFIED_FILE_TYPES', taskSchedulingFlowSchedulingFileParsingAgentsForSpecifiedFileTypesFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SCHEDULING_FILE_PARSING_AGENTS_FOR_SPECIFIED_FILE_TYPES', JSON.parse(JSON.stringify(taskSchedulingFlowSchedulingFileParsingAgentsForSpecifiedFileTypes)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_SIGAO_DOWNLOAD_EXECUTION_CHART', taskSchedulingFlowSigaoDownloadExecutionChartFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_SIGAO_DOWNLOAD_EXECUTION_CHART', JSON.parse(JSON.stringify(taskSchedulingFlowSigaoDownloadExecutionChart)))
  register('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_CODE_UNIFIED_SCHEDULING_OF_INTELLIGENT_AGENT', taskSchedulingFlowUnifiedSchedulingOfIntelligentAgentFacade);
  load('@cn.com.thingo.intelligentAgentPlatform.taskScheduling/FLOW_UNIFIED_SCHEDULING_OF_INTELLIGENT_AGENT', JSON.parse(JSON.stringify(taskSchedulingFlowUnifiedSchedulingOfIntelligentAgent)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ACCOUNT_ROLE_SETTINGS', permissionFlowAccountRoleSettingsFacade);
  load('@com.horsecoder.platform.permission/FLOW_ACCOUNT_ROLE_SETTINGS', JSON.parse(JSON.stringify(permissionFlowAccountRoleSettings)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_ACCOUNT_ORGANIZATION_PERMISSIONS', permissionFlowAddAccountOrganizationPermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_ACCOUNT_ORGANIZATION_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowAddAccountOrganizationPermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_AND_BIND_PERMISSIONS_TO_ORGANIZE', permissionFlowAddAndBindPermissionsToOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_AND_BIND_PERMISSIONS_TO_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowAddAndBindPermissionsToOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_ORGANIZE', permissionFlowAddOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowAddOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_ORGANIZE_ACCOUNT_PERMISSION', permissionFlowAddOrganizeAccountPermissionFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_ORGANIZE_ACCOUNT_PERMISSION', JSON.parse(JSON.stringify(permissionFlowAddOrganizeAccountPermission)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_OR_GET_ACCOUNT', permissionFlowAddOrGetAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_OR_GET_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowAddOrGetAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_PERMISSIONS_TO_THE_ORGANIZE', permissionFlowAddPermissionsToTheOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_PERMISSIONS_TO_THE_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowAddPermissionsToTheOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ADD_ROLE_PERMISSIONS', permissionFlowAddRolePermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_ADD_ROLE_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowAddRolePermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BATCH_ADD_ORGANIZE_AND_SPECIFY_ADMINISTRATOR', permissionFlowBatchAddOrganizeAndSpecifyAdministratorFacade);
  load('@com.horsecoder.platform.permission/FLOW_BATCH_ADD_ORGANIZE_AND_SPECIFY_ADMINISTRATOR', JSON.parse(JSON.stringify(permissionFlowBatchAddOrganizeAndSpecifyAdministrator)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BATCH_BIND_ORGANIZE_ACCOUNTS', permissionFlowBatchBindOrganizeAccountsFacade);
  load('@com.horsecoder.platform.permission/FLOW_BATCH_BIND_ORGANIZE_ACCOUNTS', JSON.parse(JSON.stringify(permissionFlowBatchBindOrganizeAccounts)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BATCH_OBTAIN_ORGANIZE_INFORMATION', permissionFlowBatchObtainOrganizeInformationFacade);
  load('@com.horsecoder.platform.permission/FLOW_BATCH_OBTAIN_ORGANIZE_INFORMATION', JSON.parse(JSON.stringify(permissionFlowBatchObtainOrganizeInformation)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BATCH_RETRIEVE_ORGANIZE_DETAIL_LIST', permissionFlowBatchRetrieveOrganizeDetailListFacade);
  load('@com.horsecoder.platform.permission/FLOW_BATCH_RETRIEVE_ORGANIZE_DETAIL_LIST', JSON.parse(JSON.stringify(permissionFlowBatchRetrieveOrganizeDetailList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BIND_ORGANIZE_ACCOUNT', permissionFlowBindOrganizeAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_BIND_ORGANIZE_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowBindOrganizeAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_BUILD_AN_ORGANIZE_TREE_BASED_ON_ORGANIZE_LIST', permissionFlowBuildAnOrganizeTreeBasedOnOrganizeListFacade);
  load('@com.horsecoder.platform.permission/FLOW_BUILD_AN_ORGANIZE_TREE_BASED_ON_ORGANIZE_LIST', JSON.parse(JSON.stringify(permissionFlowBuildAnOrganizeTreeBasedOnOrganizeList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_CASCADE_DELETE_ORGANIZE_ACCOUNT', permissionFlowCascadeDeleteOrganizeAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_CASCADE_DELETE_ORGANIZE_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowCascadeDeleteOrganizeAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_CREATE_ORGANIZE_ACCOUNT', permissionFlowCreateOrganizeAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_CREATE_ORGANIZE_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowCreateOrganizeAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_CREATE_ROLE', permissionFlowCreateRoleFacade);
  load('@com.horsecoder.platform.permission/FLOW_CREATE_ROLE', JSON.parse(JSON.stringify(permissionFlowCreateRole)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_CREATE_SUBORDINATE_ORGANIZE_WITH_ADMINISTRATOR', permissionFlowCreateSubordinateOrganizeWithAdministratorFacade);
  load('@com.horsecoder.platform.permission/FLOW_CREATE_SUBORDINATE_ORGANIZE_WITH_ADMINISTRATOR', JSON.parse(JSON.stringify(permissionFlowCreateSubordinateOrganizeWithAdministrator)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DELETE_ACCOUNT', permissionFlowDeleteAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_DELETE_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowDeleteAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DELETE_ORGANIZE_ACCOUNT_PERMISSIONS', permissionFlowDeleteOrganizeAccountPermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_ACCOUNT_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowDeleteOrganizeAccountPermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DELETE_ORGANIZE_INTERFACE', permissionFlowDeleteOrganizeInterfaceFacade);
  load('@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_INTERFACE', JSON.parse(JSON.stringify(permissionFlowDeleteOrganizeInterface)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DELETE_ORGANIZE_PERMISSION', permissionFlowDeleteOrganizePermissionFacade);
  load('@com.horsecoder.platform.permission/FLOW_DELETE_ORGANIZE_PERMISSION', JSON.parse(JSON.stringify(permissionFlowDeleteOrganizePermission)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DELETE_ROLE', permissionFlowDeleteRoleFacade);
  load('@com.horsecoder.platform.permission/FLOW_DELETE_ROLE', JSON.parse(JSON.stringify(permissionFlowDeleteRole)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_DETERMINE_WHETHER_THE_ROLE_BELONGS_TO_THE_CURRENT_ORGANIZATION', permissionFlowDetermineWhetherTheRoleBelongsToTheCurrentOrganizationFacade);
  load('@com.horsecoder.platform.permission/FLOW_DETERMINE_WHETHER_THE_ROLE_BELONGS_TO_THE_CURRENT_ORGANIZATION', JSON.parse(JSON.stringify(permissionFlowDetermineWhetherTheRoleBelongsToTheCurrentOrganization)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_FILTER_ACCOUNTS_LIST_CAN_BOUND_TO_ORGANIZE', permissionFlowFilterAccountsListCanBoundToOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_FILTER_ACCOUNTS_LIST_CAN_BOUND_TO_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowFilterAccountsListCanBoundToOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_FILTER_ORGANIZE_LIST', permissionFlowFilterOrganizeListFacade);
  load('@com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_LIST', JSON.parse(JSON.stringify(permissionFlowFilterOrganizeList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_FILTER_ORGANIZE_TYPE_LIST_BASED_ON_ORGANIZE_TYPE_ID_LIST', permissionFlowFilterOrganizeTypeListBasedOnOrganizeTypeIdListFacade);
  load('@com.horsecoder.platform.permission/FLOW_FILTER_ORGANIZE_TYPE_LIST_BASED_ON_ORGANIZE_TYPE_ID_LIST', JSON.parse(JSON.stringify(permissionFlowFilterOrganizeTypeListBasedOnOrganizeTypeIdList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_ALL_ACCOUNTS_UNDER_ORGANIZE', permissionFlowGetAllAccountsUnderOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_ALL_ACCOUNTS_UNDER_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowGetAllAccountsUnderOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_LIST_OF_ASSIGNABLE_PERMISSIONS_FOR_ORGANIZE', permissionFlowGetListOfAssignablePermissionsForOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_LIST_OF_ASSIGNABLE_PERMISSIONS_FOR_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowGetListOfAssignablePermissionsForOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_ORGANIZE_ACCOUNT_PERMISSION_LIST', permissionFlowGetOrganizeAccountPermissionListFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ACCOUNT_PERMISSION_LIST', JSON.parse(JSON.stringify(permissionFlowGetOrganizeAccountPermissionList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_ORGANIZE_DETAILS', permissionFlowGetOrganizeDetailsFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_DETAILS', JSON.parse(JSON.stringify(permissionFlowGetOrganizeDetails)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_ORGANIZE_ROLE_PERMISSION_LIST', permissionFlowGetOrganizeRolePermissionListFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_ROLE_PERMISSION_LIST', JSON.parse(JSON.stringify(permissionFlowGetOrganizeRolePermissionList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_GET_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH', permissionFlowGetOrganizeViewAndOrganizeListByDepthFacade);
  load('@com.horsecoder.platform.permission/FLOW_GET_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH', JSON.parse(JSON.stringify(permissionFlowGetOrganizeViewAndOrganizeListByDepth)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_LIST_OF_UNBOUND_ORGANIZE_ACCOUNTS', permissionFlowListOfUnboundOrganizeAccountsFacade);
  load('@com.horsecoder.platform.permission/FLOW_LIST_OF_UNBOUND_ORGANIZE_ACCOUNTS', JSON.parse(JSON.stringify(permissionFlowListOfUnboundOrganizeAccounts)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_NEW_ORGANIZATION_PERMISSIONS', permissionFlowNewOrganizationPermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_NEW_ORGANIZATION_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowNewOrganizationPermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_NEW_SUBORDINATE_ORGANIZE', permissionFlowNewSubordinateOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_NEW_SUBORDINATE_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowNewSubordinateOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ACCOUNT_ORGANIZATIONS_OF_SPECIFIED_TYPE', permissionFlowObtainAccountOrganizationsOfSpecifiedTypeFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATIONS_OF_SPECIFIED_TYPE', JSON.parse(JSON.stringify(permissionFlowObtainAccountOrganizationsOfSpecifiedType)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ACCOUNT_ORGANIZATION_CONFIGURATION', permissionFlowObtainAccountOrganizationConfigurationFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_CONFIGURATION', JSON.parse(JSON.stringify(permissionFlowObtainAccountOrganizationConfiguration)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ACCOUNT_ORGANIZATION_PERMISSIONS', permissionFlowObtainAccountOrganizationPermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowObtainAccountOrganizationPermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ACCOUNT_ORGANIZATION_ROLES', permissionFlowObtainAccountOrganizationRolesFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZATION_ROLES', JSON.parse(JSON.stringify(permissionFlowObtainAccountOrganizationRoles)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ACCOUNT_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH', permissionFlowObtainAccountOrganizeViewAndOrganizeListByDepthFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ACCOUNT_ORGANIZE_VIEW_AND_ORGANIZE_LIST_BY_DEPTH', JSON.parse(JSON.stringify(permissionFlowObtainAccountOrganizeViewAndOrganizeListByDepth)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ALL_PERMISSIONS_FOR_THE_ROLE_LIST', permissionFlowObtainAllPermissionsForTheRoleListFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ALL_PERMISSIONS_FOR_THE_ROLE_LIST', JSON.parse(JSON.stringify(permissionFlowObtainAllPermissionsForTheRoleList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_CANDIDATE_LIST_OF_ORGANIZE_MANAGEMENT_ACCOUNTS', permissionFlowObtainCandidateListOfOrganizeManagementAccountsFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_CANDIDATE_LIST_OF_ORGANIZE_MANAGEMENT_ACCOUNTS', JSON.parse(JSON.stringify(permissionFlowObtainCandidateListOfOrganizeManagementAccounts)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_LIST_OF_ACCOUNT_ROLE_PERMISSIONS', permissionFlowObtainListOfAccountRolePermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_LIST_OF_ACCOUNT_ROLE_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowObtainListOfAccountRolePermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ORGANIZE_ACCOUNT_ASSIGNABLE_PERMISSIONS', permissionFlowObtainOrganizeAccountAssignablePermissionsFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_ACCOUNT_ASSIGNABLE_PERMISSIONS', JSON.parse(JSON.stringify(permissionFlowObtainOrganizeAccountAssignablePermissions)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_ORGANIZE_PERMISSION_LIST', permissionFlowObtainOrganizePermissionListFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_ORGANIZE_PERMISSION_LIST', JSON.parse(JSON.stringify(permissionFlowObtainOrganizePermissionList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_PERMISSION_LIST_BASED_ON_ROLE_ID', permissionFlowObtainPermissionListBasedOnRoleIdFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_PERMISSION_LIST_BASED_ON_ROLE_ID', JSON.parse(JSON.stringify(permissionFlowObtainPermissionListBasedOnRoleId)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_OBTAIN_POSITIVE_AND_NEGATIVE_PERMISSIONS_FOR_ACCOUNT', permissionFlowObtainPositiveAndNegativePermissionsForAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_OBTAIN_POSITIVE_AND_NEGATIVE_PERMISSIONS_FOR_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowObtainPositiveAndNegativePermissionsForAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_QUERY_ACCOUNT_BASED_ON_ACCOUNT_ID', permissionFlowQueryAccountBasedOnAccountIdFacade);
  load('@com.horsecoder.platform.permission/FLOW_QUERY_ACCOUNT_BASED_ON_ACCOUNT_ID', JSON.parse(JSON.stringify(permissionFlowQueryAccountBasedOnAccountId)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_QUERY_LIST_OF_ACCOUNTS_THAT_CAN_BE_BOUND_A_ROLE', permissionFlowQueryListOfAccountsThatCanBeBoundARoleFacade);
  load('@com.horsecoder.platform.permission/FLOW_QUERY_LIST_OF_ACCOUNTS_THAT_CAN_BE_BOUND_A_ROLE', JSON.parse(JSON.stringify(permissionFlowQueryListOfAccountsThatCanBeBoundARole)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_RETRIEVE_ORGANIZE_VIEW_AND_ORGANIZE_LIST_DETAILS_BY_DEPTH', permissionFlowRetrieveOrganizeViewAndOrganizeListDetailsByDepthFacade);
  load('@com.horsecoder.platform.permission/FLOW_RETRIEVE_ORGANIZE_VIEW_AND_ORGANIZE_LIST_DETAILS_BY_DEPTH', JSON.parse(JSON.stringify(permissionFlowRetrieveOrganizeViewAndOrganizeListDetailsByDepth)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_RETRIEVE_ROLE_PAGINATION_DATA', permissionFlowRetrieveRolePaginationDataFacade);
  load('@com.horsecoder.platform.permission/FLOW_RETRIEVE_ROLE_PAGINATION_DATA', JSON.parse(JSON.stringify(permissionFlowRetrieveRolePaginationData)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_ROLE_BINDING_ACCOUNT', permissionFlowRoleBindingAccountFacade);
  load('@com.horsecoder.platform.permission/FLOW_ROLE_BINDING_ACCOUNT', JSON.parse(JSON.stringify(permissionFlowRoleBindingAccount)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_TRANSFER_ORGANIZE_ADMINISTRATOR', permissionFlowTransferOrganizeAdministratorFacade);
  load('@com.horsecoder.platform.permission/FLOW_TRANSFER_ORGANIZE_ADMINISTRATOR', JSON.parse(JSON.stringify(permissionFlowTransferOrganizeAdministrator)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_UPDATE_ORGANIZE_INFORMATION', permissionFlowUpdateOrganizeInformationFacade);
  load('@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_INFORMATION', JSON.parse(JSON.stringify(permissionFlowUpdateOrganizeInformation)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_UPDATE_ORGANIZE_PARENT_ORGANIZE', permissionFlowUpdateOrganizeParentOrganizeFacade);
  load('@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_PARENT_ORGANIZE', JSON.parse(JSON.stringify(permissionFlowUpdateOrganizeParentOrganize)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_UPDATE_ORGANIZE_TYPE_PERMISSION_TEMPLATE_PERMISSION_LIST', permissionFlowUpdateOrganizeTypePermissionTemplatePermissionListFacade);
  load('@com.horsecoder.platform.permission/FLOW_UPDATE_ORGANIZE_TYPE_PERMISSION_TEMPLATE_PERMISSION_LIST', JSON.parse(JSON.stringify(permissionFlowUpdateOrganizeTypePermissionTemplatePermissionList)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_VERIFY_ACCOUNT_AND_ORGANIZATION_EXIST', permissionFlowVerifyAccountAndOrganizationExistFacade);
  load('@com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_AND_ORGANIZATION_EXIST', JSON.parse(JSON.stringify(permissionFlowVerifyAccountAndOrganizationExist)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_VERIFY_ACCOUNT_EXISTS', permissionFlowVerifyAccountExistsFacade);
  load('@com.horsecoder.platform.permission/FLOW_VERIFY_ACCOUNT_EXISTS', JSON.parse(JSON.stringify(permissionFlowVerifyAccountExists)))
  register('@com.horsecoder.platform.permission/FLOW_CODE_VERIFY_ORGANIZATION_EXISTS', permissionFlowVerifyOrganizationExistsFacade);
  load('@com.horsecoder.platform.permission/FLOW_VERIFY_ORGANIZATION_EXISTS', JSON.parse(JSON.stringify(permissionFlowVerifyOrganizationExists)))
  register('@com.horsecoder.storage/FLOW_CODE_UPLOAD_STRING_FILE', storageFlowUploadStringFileFacade);
  load('@com.horsecoder.storage/FLOW_UPLOAD_STRING_FILE', JSON.parse(JSON.stringify(storageFlowUploadStringFile)))
  register('@com.horsecoder.storage/FLOW_CODE_STREAMING_FILE_UPLOAD', storageFlowStreamingFileUploadFacade);
  load('@com.horsecoder.storage/FLOW_STREAMING_FILE_UPLOAD', JSON.parse(JSON.stringify(storageFlowStreamingFileUpload)))
  register('@com.horsecoder.storage/FLOW_CODE_GET_URL_FILE_TYPE', storageFlowGetUrlFileTypeFacade);
  load('@com.horsecoder.storage/FLOW_GET_URL_FILE_TYPE', JSON.parse(JSON.stringify(storageFlowGetUrlFileType)))
  register('@com.horsecoder.storage/FLOW_CODE_GET_FILE_TYPE', storageFlowGetFileTypeFacade);
  load('@com.horsecoder.storage/FLOW_GET_FILE_TYPE', JSON.parse(JSON.stringify(storageFlowGetFileType)))
  register('@com.horsecoder.storage/FLOW_CODE_FILE_UPLOAD_STREAM', storageFlowFileUploadStreamFacade);
  load('@com.horsecoder.storage/FLOW_FILE_UPLOAD_STREAM', JSON.parse(JSON.stringify(storageFlowFileUploadStream)))
  register('@com.horsecoder.storage/FLOW_CODE_UPLOAD_FILE', storageFlowUploadFileFacade);
  load('@com.horsecoder.storage/FLOW_UPLOAD_FILE', JSON.parse(JSON.stringify(storageFlowUploadFile)))
  register('@com.horsecoder.storage/FLOW_CODE_DOWNLOAD_FILE', storageFlowDownloadFileFacade);
  load('@com.horsecoder.storage/FLOW_DOWNLOAD_FILE', JSON.parse(JSON.stringify(storageFlowDownloadFile)))
  register('@com.horsecoder.storage/FLOW_CODE_UPLOAD_FILE_WITH_VERB', storageFlowUploadFileWithVerbFacade);
  load('@com.horsecoder.storage/FLOW_UPLOAD_FILE_WITH_VERB', JSON.parse(JSON.stringify(storageFlowUploadFileWithVerb)))
  register('@com.horsecoder.storage/FLOW_CODE_BATCH_UPLOAD_FILES_WITH_VERB', storageFlowBatchUploadFilesWithVerbFacade);
  load('@com.horsecoder.storage/FLOW_BATCH_UPLOAD_FILES_WITH_VERB', JSON.parse(JSON.stringify(storageFlowBatchUploadFilesWithVerb)))
  register('@com.horsecoder.demand/FLOW_CODE_BATCH_CREATE_REPOSITORIES_ON_GIT', demandFlowBatchCreateRepositoriesOnGitFacade);
  load('@com.horsecoder.demand/FLOW_BATCH_CREATE_REPOSITORIES_ON_GIT', JSON.parse(JSON.stringify(demandFlowBatchCreateRepositoriesOnGit)))
  register('@com.horsecoder.demand/FLOW_CODE_BATCH_OBTAIN_USER_GIT_STATUS', demandFlowBatchObtainUserGitStatusFacade);
  load('@com.horsecoder.demand/FLOW_BATCH_OBTAIN_USER_GIT_STATUS', JSON.parse(JSON.stringify(demandFlowBatchObtainUserGitStatus)))
  register('@com.horsecoder.demand/FLOW_CODE_CREATE_GIT_USER', demandFlowCreateGitUserFacade);
  load('@com.horsecoder.demand/FLOW_CREATE_GIT_USER', JSON.parse(JSON.stringify(demandFlowCreateGitUser)))
  register('@com.horsecoder.demand/FLOW_CODE_CREATE_PROJECT', demandFlowCreateProjectFacade);
  load('@com.horsecoder.demand/FLOW_CREATE_PROJECT', JSON.parse(JSON.stringify(demandFlowCreateProject)))
  register('@com.horsecoder.demand/FLOW_CODE_CREATE_REPOSITORY_ON_GIT', demandFlowCreateRepositoryOnGitFacade);
  load('@com.horsecoder.demand/FLOW_CREATE_REPOSITORY_ON_GIT', JSON.parse(JSON.stringify(demandFlowCreateRepositoryOnGit)))
  register('@com.horsecoder.demand/FLOW_CODE_DELETE_GIT_USER', demandFlowDeleteGitUserFacade);
  load('@com.horsecoder.demand/FLOW_DELETE_GIT_USER', JSON.parse(JSON.stringify(demandFlowDeleteGitUser)))
  register('@com.horsecoder.demand/FLOW_CODE_DISABLE_GIT_USER', demandFlowDisableGitUserFacade);
  load('@com.horsecoder.demand/FLOW_DISABLE_GIT_USER', JSON.parse(JSON.stringify(demandFlowDisableGitUser)))
  register('@com.horsecoder.demand/FLOW_CODE_OPENING_GIT_WAREHOUSE_PERMISSIONS', demandFlowOpeningGitWarehousePermissionsFacade);
  load('@com.horsecoder.demand/FLOW_OPENING_GIT_WAREHOUSE_PERMISSIONS', JSON.parse(JSON.stringify(demandFlowOpeningGitWarehousePermissions)))
  register('@com.horsecoder.demand/FLOW_CODE_OPEN_GIT_REPOSITORY_PERMISSIONS_FOR_ALL_PROJECTS_IN_SPACE', demandFlowOpenGitRepositoryPermissionsForAllProjectsInSpaceFacade);
  load('@com.horsecoder.demand/FLOW_OPEN_GIT_REPOSITORY_PERMISSIONS_FOR_ALL_PROJECTS_IN_SPACE', JSON.parse(JSON.stringify(demandFlowOpenGitRepositoryPermissionsForAllProjectsInSpace)))
  register('@com.horsecoder.demand/FLOW_CODE_UNLOCK_GIT_USERS', demandFlowUnlockGitUsersFacade);
  load('@com.horsecoder.demand/FLOW_UNLOCK_GIT_USERS', JSON.parse(JSON.stringify(demandFlowUnlockGitUsers)))
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_SETTINGS_PANEL', JSON.parse(JSON.stringify(LeftComponentOnClickOpenSettingsPanelFlowOnClickOpenSettingsPanel)))
  register('LeftComponent/OnClickOpenSettingsPanel/FLOW_CODE_ON_CLICK_OPEN_SETTINGS_PANEL', LeftComponentOnClickOpenSettingsPanelFlowCodeOnClickOpenSettingsPanel);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_EXPAND_SETTINGS_PANEL', JSON.parse(JSON.stringify(LeftComponentOnClickExpandSettingsPanelFlowOnClickExpandSettingsPanel)))
  register('LeftComponent/OnClickExpandSettingsPanel/FLOW_CODE_ON_CLICK_EXPAND_SETTINGS_PANEL', LeftComponentOnClickExpandSettingsPanelFlowCodeOnClickExpandSettingsPanel);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS', JSON.parse(JSON.stringify(OrderSelectOnClickContinuePaymentForUnfinishedOrdersFlowOnClickContinuePaymentForUnfinishedOrders)))
  register('OrderSelect/OnClickContinuePaymentForUnfinishedOrders/FLOW_CODE_ON_CLICK_CONTINUE_PAYMENT_FOR_UNFINISHED_ORDERS', OrderSelectOnClickContinuePaymentForUnfinishedOrdersFlowCodeOnClickContinuePaymentForUnfinishedOrders);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_WE_CHAT_PAY_ORDER', JSON.parse(JSON.stringify(PaymentOnInitializeWeChatPayOrderFlowOnInitializeWeChatPayOrder)))
  register('Payment/OnInitializeWeChatPayOrder/FLOW_CODE_ON_INITIALIZE_WE_CHAT_PAY_ORDER', PaymentOnInitializeWeChatPayOrderFlowCodeOnInitializeWeChatPayOrder);
  register('Payment/OnInitializeWeChatPayOrder/FLOW_CODE_INITIALIZE_PAYMENT_ORDER_DATA', PaymentOnInitializeWeChatPayOrderFlowCodeInitializePaymentOrderData);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER', JSON.parse(JSON.stringify(PaymentOnInitializeOrderCardBasedOnOrderNumberFlowOnInitializeOrderCardBasedOnOrderNumber)))
  register('Payment/OnInitializeOrderCardBasedOnOrderNumber/FLOW_CODE_ON_INITIALIZE_ORDER_CARD_BASED_ON_ORDER_NUMBER', PaymentOnInitializeOrderCardBasedOnOrderNumberFlowCodeOnInitializeOrderCardBasedOnOrderNumber);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_CANCEL_ORDER', JSON.parse(JSON.stringify(OrderSelectOnClickCancelOrderFlowOnClickCancelOrder)))
  register('OrderSelect/OnClickCancelOrder/FLOW_CODE_ON_CLICK_CANCEL_ORDER', OrderSelectOnClickCancelOrderFlowCodeOnClickCancelOrder);
  register('OrderSelect/OnClickCancelOrder/FLOW_CODE_VERIFY_CANCELLATION_PROCESSING_RESULT_OF_ORDER', OrderSelectOnClickCancelOrderFlowCodeVerifyCancellationProcessingResultOfOrder);
  register('OrderSelect/OnClickCancelOrder/FLOW_CODE_DISABLE_ORDER_PROMPT_VISIBLE_CONTROL', OrderSelectOnClickCancelOrderFlowCodeDisableOrderPromptVisibleControl);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_INITIALIZE_ORDER_SELECT_PAGE', JSON.parse(JSON.stringify(OrderSelectOnInitializeOrderSelectPageFlowOnInitializeOrderSelectPage)))
  register('OrderSelect/OnInitializeOrderSelectPage/FLOW_CODE_ON_INITIALIZE_ORDER_SELECT_PAGE', OrderSelectOnInitializeOrderSelectPageFlowCodeOnInitializeOrderSelectPage);
  register('OrderSelect/OnInitializeOrderSelectPage/FLOW_CODE_DETERMINE_WHETHERRE_ARE_UNPAID_ORDERS_DISPLAYED_BASED_ON_QUERY_RESULTS', OrderSelectOnInitializeOrderSelectPageFlowCodeDetermineWhetherreAreUnpaidOrdersDisplayedBasedOnQueryResults);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CREATE_PAYMENT_ORDER', JSON.parse(JSON.stringify(OrderSelectOnCreatePaymentOrderFlowOnCreatePaymentOrder)))
  register('OrderSelect/OnCreatePaymentOrder/FLOW_CODE_FRONT_END_CREATES_PAYMENT_ORDERS', OrderSelectOnCreatePaymentOrderFlowCodeFrontEndCreatesPaymentOrders);
  register('OrderSelect/OnCreatePaymentOrder/FLOW_CODE_JUMP_DIRECT_PAYMENT_PAGE', OrderSelectOnCreatePaymentOrderFlowCodeJumpDirectPaymentPage);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES', JSON.parse(JSON.stringify(LeftComponentOnClickOpenPromotionalActivitiesFlowOnClickOpenPromotionalActivities)))
  register('LeftComponent/OnClickOpenPromotionalActivities/FLOW_CODE_DETERMINE_USER_MEMBERSHIP_STATUS', LeftComponentOnClickOpenPromotionalActivitiesFlowCodeDetermineUserMembershipStatus);
  register('LeftComponent/OnClickOpenPromotionalActivities/FLOW_CODE_ON_CLICK_OPEN_PROMOTIONAL_ACTIVITIES', LeftComponentOnClickOpenPromotionalActivitiesFlowCodeOnClickOpenPromotionalActivities);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_CANCEL_PAYMENT', JSON.parse(JSON.stringify(PaymentOnClickCancelPaymentFlowOnClickCancelPayment)))
  register('Payment/OnClickCancelPayment/FLOW_CODE_ON_CLICK_CANCEL_PAYMENT', PaymentOnClickCancelPaymentFlowCodeOnClickCancelPayment);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L', JSON.parse(JSON.stringify(PaymentOnPaymentCallbackCompletedSeriousIllnessDirectedURLFlowOnPaymentCallbackCompletedSeriousIllnessDirectedURL)))
  register('Payment/OnPaymentCallbackCompletedSeriousIllnessDirectedURL/FLOW_CODE_ON_PAYMENT_CALLBACK_COMPLETED_SERIOUS_ILLNESS_DIRECTED_U_R_L', PaymentOnPaymentCallbackCompletedSeriousIllnessDirectedURLFlowCodeOnPaymentCallbackCompletedSeriousIllnessDirectedURL);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN', JSON.parse(JSON.stringify(LogInOnClickOnSMSVerificationCodeLogInFlowOnClickOnSMSVerificationCodeLogIn)))
  register('LogIn/OnClickOnSMSVerificationCodeLogIn/FLOW_CODE_ON_CLICK_ON_S_M_S_VERIFICATION_CODE_LOG_IN', LogInOnClickOnSMSVerificationCodeLogInFlowCodeOnClickOnSMSVerificationCodeLogIn);
  register('LogIn/OnClickOnSMSVerificationCodeLogIn/FLOW_CODE_PROCESS_LOGIN_INFORMATION_OBTAIN_USER_ID', LogInOnClickOnSMSVerificationCodeLogInFlowCodeProcessLoginInformationObtainUserId);
  register('LogIn/OnClickOnSMSVerificationCodeLogIn/FLOW_CODE_SET_USER_INFORMATION_AND_REDIRECT_HOMEPAGE', LogInOnClickOnSMSVerificationCodeLogInFlowCodeSetUserInformationAndRedirectHomepage);
  load('@com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_LOGIN_USER_AND_WEBSOCKET_CONNECTION', JSON.parse(JSON.stringify(EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowOnInitializeLoginUserAndWebsocketConnection)))
  register('EmptyLayout/OnInitializeLoginUserAndWebsocketConnection/FLOW_CODE_OBTAIN_USERKEN', EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeObtainUserken);
  register('EmptyLayout/OnInitializeLoginUserAndWebsocketConnection/FLOW_CODE_GET_LOGGED_IN_USERS', EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeGetLoggedInUsers);
  register('EmptyLayout/OnInitializeLoginUserAndWebsocketConnection/FLOW_CODE_INITIALIZE_WEBSOCKET_CONNECTION', EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeInitializeWebsocketConnection);
  register('EmptyLayout/OnInitializeLoginUserAndWebsocketConnection/FLOW_CODE_SET_MEMBERSHIP_TYPE', EmptyLayoutOnInitializeLoginUserAndWebsocketConnectionFlowCodeSetMembershipType);
  load('@com.horsecoder.platform.mall.umi.chat/emptyLayout/FLOW_ON_INITIALIZE_MEMBERSHIP_STATUS', JSON.parse(JSON.stringify(EmptyLayoutOnInitializeMembershipStatusFlowOnInitializeMembershipStatus)))
  register('EmptyLayout/OnInitializeMembershipStatus/FLOW_CODE_ON_INITIALIZE_MEMBERSHIP_STATUS', EmptyLayoutOnInitializeMembershipStatusFlowCodeOnInitializeMembershipStatus);
  register('EmptyLayout/OnInitializeMembershipStatus/FLOW_CODE_SET_MEMBERSHIP_TYPE_DATA', EmptyLayoutOnInitializeMembershipStatusFlowCodeSetMembershipTypeData);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ALIPAY_PAYMENT_BUTTON', JSON.parse(JSON.stringify(PaymentOnClickAlipayPaymentButtonFlowOnClickAlipayPaymentButton)))
  register('Payment/OnClickAlipayPaymentButton/FLOW_CODE_ON_CLICK_ALIPAY_PAYMENT_BUTTON', PaymentOnClickAlipayPaymentButtonFlowCodeOnClickAlipayPaymentButton);
  register('Payment/OnClickAlipayPaymentButton/FLOW_CODE_ENABLE_VISIBLE_CONTROL_OF_PAYMENT_Q_R_CODE', PaymentOnClickAlipayPaymentButtonFlowCodeEnableVisibleControlOfPaymentQRCode);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_ON_WE_CHAT_PAY', JSON.parse(JSON.stringify(PaymentOnClickOnWeChatPayFlowOnClickOnWeChatPay)))
  register('Payment/OnClickOnWeChatPay/FLOW_CODE_ON_CLICK_ON_WE_CHAT_PAY', PaymentOnClickOnWeChatPayFlowCodeOnClickOnWeChatPay);
  register('Payment/OnClickOnWeChatPay/FLOW_CODE_ENABLE_VISIBLE_CONTROL_OF_PAYMENT_Q_R_CODE', PaymentOnClickOnWeChatPayFlowCodeEnableVisibleControlOfPaymentQRCode);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_JUMP_PAYMENT_PAGE', JSON.parse(JSON.stringify(OrderSelectOnClickJumpPaymentPageFlowOnClickJumpPaymentPage)))
  register('OrderSelect/OnClickJumpPaymentPage/FLOW_CODE_VERIFY_USER_TYPE_AND_CREATE_ORDER', OrderSelectOnClickJumpPaymentPageFlowCodeVerifyUserTypeAndCreateOrder);
  register('OrderSelect/OnClickJumpPaymentPage/FLOW_CODE_JUMP_PAYMENT_PAGE', OrderSelectOnClickJumpPaymentPageFlowCodeJumpPaymentPage);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_ON_ACCOUNT_LOGIN', JSON.parse(JSON.stringify(LogInOnClickOnAccountLoginFlowOnClickOnAccountLogin)))
  register('LogIn/OnClickOnAccountLogin/FLOW_CODE_ON_CLICK_ON_ACCOUNT_LOGIN', LogInOnClickOnAccountLoginFlowCodeOnClickOnAccountLogin);
  register('LogIn/OnClickOnAccountLogin/FLOW_CODE_RETURN_INFORMATION_AFTER_PROCESSING_LOGIN', LogInOnClickOnAccountLoginFlowCodeReturnInformationAfterProcessingLogin);
  register('LogIn/OnClickOnAccountLogin/FLOW_CODE_LOGIN_SUCCESSFUL_REDIRECT_HOMEPAGE', LogInOnClickOnAccountLoginFlowCodeLoginSuccessfulRedirectHomepage);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE', JSON.parse(JSON.stringify(OrderSelectOnClickDisplayEnterprisePackageFlowOnClickDisplayEnterprisePackage)))
  register('OrderSelect/OnClickDisplayEnterprisePackage/FLOW_CODE_ON_CLICK_DISPLAY_ENTERPRISE_PACKAGE', OrderSelectOnClickDisplayEnterprisePackageFlowCodeOnClickDisplayEnterprisePackage);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_DISPLAY_PERSONAL_PACKAGE', JSON.parse(JSON.stringify(OrderSelectOnClickDisplayPersonalPackageFlowOnClickDisplayPersonalPackage)))
  register('OrderSelect/OnClickDisplayPersonalPackage/FLOW_CODE_ON_CLICK_DISPLAY_PERSONAL_PACKAGE', OrderSelectOnClickDisplayPersonalPackageFlowCodeOnClickDisplayPersonalPackage);
  load('@com.horsecoder.platform.mall.umi.chat/orderSelect/FLOW_ON_CLICK_ON_ALL_PACKAGE_BUTTON', JSON.parse(JSON.stringify(OrderSelectOnClickOnAllPackageButtonFlowOnClickOnAllPackageButton)))
  register('OrderSelect/OnClickOnAllPackageButton/FLOW_CODE_ON_CLICK_ON_ALL_PACKAGE_BUTTON', OrderSelectOnClickOnAllPackageButtonFlowCodeOnClickOnAllPackageButton);
  load('@com.horsecoder.platform.mall.umi.chat/payment/FLOW_ON_CLICK_RETURN', JSON.parse(JSON.stringify(PaymentOnClickReturnFlowOnClickReturn)))
  register('Payment/OnClickReturn/FLOW_CODE_ON_CLICK_RETURN', PaymentOnClickReturnFlowCodeOnClickReturn);
  load('@com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_SWITCH_DATA_BUTTON', JSON.parse(JSON.stringify(RightpMenuOnClickSwitchDataButtonFlowOnClickSwitchDataButton)))
  register('RightpMenu/OnClickSwitchDataButton/FLOW_CODE_ON_CLICK_SWITCH_DATA_BUTTON', RightpMenuOnClickSwitchDataButtonFlowCodeOnClickSwitchDataButton);
  load('@com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS', JSON.parse(JSON.stringify(PanelOnDetermineDisplayComponentBasedOnActiveSubPanelsFlowOnDetermineDisplayComponentBasedOnActiveSubPanels)))
  register('Panel/OnDetermineDisplayComponentBasedOnActiveSubPanels/FLOW_CODE_ON_DETERMINE_DISPLAY_COMPONENT_BASED_ON_ACTIVE_SUB_PANELS', PanelOnDetermineDisplayComponentBasedOnActiveSubPanelsFlowCodeOnDetermineDisplayComponentBasedOnActiveSubPanels);
  load('@com.horsecoder.platform.mall.umi.chat/rightpMenu/FLOW_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL', JSON.parse(JSON.stringify(RightpMenuOnClickOpenIntelligentAgentPanelFlowOnClickOpenIntelligentAgentPanel)))
  register('RightpMenu/OnClickOpenIntelligentAgentPanel/FLOW_CODE_ON_CLICK_OPEN_INTELLIGENT_AGENT_PANEL', RightpMenuOnClickOpenIntelligentAgentPanelFlowCodeOnClickOpenIntelligentAgentPanel);
  load('@com.horsecoder.platform.mall.umi.chat/taskList/FLOW_ON_INITIALIZE_TASK', JSON.parse(JSON.stringify(TaskListOnInitializeTaskFlowOnInitializeTask)))
  register('TaskList/OnInitializeTask/FLOW_CODE_ON_INITIALIZE_TASK', TaskListOnInitializeTaskFlowCodeOnInitializeTask);
  load('@com.horsecoder.platform.mall.umi.chat/intelligentAgentSelectComponent/FLOW_ON_INITIALIZE_INTELLIGENT_AGENT_LIST', JSON.parse(JSON.stringify(IntelligentAgentSelectComponentOnInitializeIntelligentAgentListFlowOnInitializeIntelligentAgentList)))
  register('IntelligentAgentSelectComponent/OnInitializeIntelligentAgentList/FLOW_CODE_ON_INITIALIZE_INTELLIGENT_AGENT_LIST', IntelligentAgentSelectComponentOnInitializeIntelligentAgentListFlowCodeOnInitializeIntelligentAgentList);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_PAYMENT_MODAL', JSON.parse(JSON.stringify(DialogueOnClickOpenPaymentModalFlowOnClickOpenPaymentModal)))
  register('Dialogue/OnClickOpenPaymentModal/FLOW_CODE_OPEN_UPGRADE_PLAN_VISIBLE', DialogueOnClickOpenPaymentModalFlowCodeOpenUpgradePlanVisible);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_UPGRADE_PLAN_CANCEL', JSON.parse(JSON.stringify(MainOnUpgradePlanCancelFlowOnUpgradePlanCancel)))
  register('Main/OnUpgradePlanCancel/FLOW_CODE_CLOSE_UPGRADE_PLAN_VISIBLE', MainOnUpgradePlanCancelFlowCodeCloseUpgradePlanVisible);
  load('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_GET_VERIFICATION_CODE', JSON.parse(JSON.stringify(ScanedOnGetVerificationCodeFlowOnGetVerificationCode)))
  register('Scaned/OnGetVerificationCode/FLOW_CODE_VERIFY_FORM_AND_OBTAIN_PHONE_NUMBER', ScanedOnGetVerificationCodeFlowCodeVerifyFormAndObtainPhoneNumber);
  register('Scaned/OnGetVerificationCode/FLOW_CODE_SET_TIMER_AND_BUTTON_STATUS', ScanedOnGetVerificationCodeFlowCodeSetTimerAndButtonStatus);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_OBTAIN_S_M_S_VERIFICATION_CODE', JSON.parse(JSON.stringify(LogInOnObtainSMSVerificationCodeFlowOnObtainSMSVerificationCode)))
  register('LogIn/OnObtainSMSVerificationCode/FLOW_CODE_ON_OBTAIN_S_M_S_VERIFICATION_CODE', LogInOnObtainSMSVerificationCodeFlowCodeOnObtainSMSVerificationCode);
  register('LogIn/OnObtainSMSVerificationCode/FLOW_CODE_SET_VERIFICATION_CODE_BUTTON_COUNTDOWN_AND_CLICKABLE', LogInOnObtainSMSVerificationCodeFlowCodeSetVerificationCodeButtonCountdownAndClickable);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_SEND_MOBILE_VERIFICATION_CODE', JSON.parse(JSON.stringify(RegisterOnSendMobileVerificationCodeFlowOnSendMobileVerificationCode)))
  register('Register/OnSendMobileVerificationCode/FLOW_CODE_ON_SEND_MOBILE_VERIFICATION_CODE', RegisterOnSendMobileVerificationCodeFlowCodeOnSendMobileVerificationCode);
  register('Register/OnSendMobileVerificationCode/FLOW_CODE_SET_COUNTDOWN', RegisterOnSendMobileVerificationCodeFlowCodeSetCountdown);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_REFRESH_GRAPHIC_CAPTCHA', JSON.parse(JSON.stringify(LogInOnRefreshGraphicCaptchaFlowOnRefreshGraphicCaptcha)))
  register('LogIn/OnRefreshGraphicCaptcha/FLOW_CODE_SET_GRAPHIC_CAPTCHA_BASE_IMAGE', LogInOnRefreshGraphicCaptchaFlowCodeSetGraphicCaptchaBaseImage);
  register('LogIn/OnRefreshGraphicCaptcha/FLOW_CODE_SET_GRAPHIC_CAPTCHA_TEXT', LogInOnRefreshGraphicCaptchaFlowCodeSetGraphicCaptchaText);
  register('LogIn/OnRefreshGraphicCaptcha/FLOW_CODE_CONVERT_GRAPHIC_CAPTCHA_DATA', LogInOnRefreshGraphicCaptchaFlowCodeConvertGraphicCaptchaData);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_DISPLAY_ACCOUNT_LOGIN', JSON.parse(JSON.stringify(LogInOnClickDisplayAccountLoginFlowOnClickDisplayAccountLogin)))
  register('LogIn/OnClickDisplayAccountLogin/FLOW_CODE_ENABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL', LogInOnClickDisplayAccountLoginFlowCodeEnableAccountLoginVisibleControl);
  register('LogIn/OnClickDisplayAccountLogin/FLOW_CODE_DISABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL', LogInOnClickDisplayAccountLoginFlowCodeDisableVerificationCodeLoginVisibleControl);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_VERIFICATION_CODE_AND_LOG_IN', JSON.parse(JSON.stringify(LogInOnClickOpenVerificationCodeAndLogInFlowOnClickOpenVerificationCodeAndLogIn)))
  register('LogIn/OnClickOpenVerificationCodeAndLogIn/FLOW_CODE_ENABLE_VERIFICATION_CODE_LOGIN_VISIBLE_CONTROL', LogInOnClickOpenVerificationCodeAndLogInFlowCodeEnableVerificationCodeLoginVisibleControl);
  register('LogIn/OnClickOpenVerificationCodeAndLogIn/FLOW_CODE_DISABLE_ACCOUNT_LOGIN_VISIBLE_CONTROL', LogInOnClickOpenVerificationCodeAndLogInFlowCodeDisableAccountLoginVisibleControl);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_REGISTER', JSON.parse(JSON.stringify(RegisterOnClickRegisterFlowOnClickRegister)))
  register('Register/OnClickRegister/FLOW_CODE_ON_CLICK_REGISTER', RegisterOnClickRegisterFlowCodeOnClickRegister);
  register('Register/OnClickRegister/FLOW_CODE_SUCCESSFULLY_REGISTERED_AND_REDIRECTED_LOGIN', RegisterOnClickRegisterFlowCodeSuccessfullyRegisteredAndRedirectedLogin);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_INITIALIZE_GRAPHIC_CAPTCHA', JSON.parse(JSON.stringify(RegisterOnInitializeGraphicCaptchaFlowOnInitializeGraphicCaptcha)))
  register('Register/OnInitializeGraphicCaptcha/FLOW_CODE_SET_GRAPHICAL_VERIFICATION_CODE', RegisterOnInitializeGraphicCaptchaFlowCodeSetGraphicalVerificationCode);
  register('Register/OnInitializeGraphicCaptcha/FLOW_CODE_SET_GRAPHIC_CAPTCHA_IMAGE', RegisterOnInitializeGraphicCaptchaFlowCodeSetGraphicCaptchaImage);
  register('Register/OnInitializeGraphicCaptcha/FLOW_CODE_CONVERT_GRAPHIC_CAPTCHA_DATA', RegisterOnInitializeGraphicCaptchaFlowCodeConvertGraphicCaptchaData);
  load('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_OBTAIN_WE_CHAT_USER_INFORMATION', JSON.parse(JSON.stringify(ScanedOnObtainWeChatUserInformationFlowOnObtainWeChatUserInformation)))
  register('Scaned/OnObtainWeChatUserInformation/FLOW_CODE_IF_ALREADY_REGISTERED_JUMP_DIRECTLY', ScanedOnObtainWeChatUserInformationFlowCodeIfAlreadyRegisteredJumpDirectly);
  load('@com.horsecoder.platform.mall.umi.chat/scaned/FLOW_ON_BIND_MOBILE_NUMBER', JSON.parse(JSON.stringify(ScanedOnBindMobileNumberFlowOnBindMobileNumber)))
  register('Scaned/OnBindMobileNumber/FLOW_CODE_GET_BINDING_PARAMETERS', ScanedOnBindMobileNumberFlowCodeGetBindingParameters);
  register('Scaned/OnBindMobileNumber/FLOW_CODE_DISPATCH_LOGGEDIN_USER', ScanedOnBindMobileNumberFlowCodeDispatchLoggedinUser);
  register('Scaned/OnBindMobileNumber/FLOW_CODE_JUMP_AND_SET_USER_DATA', ScanedOnBindMobileNumberFlowCodeJumpAndSetUserData);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_CHANGE_PHONE_NUMBER', JSON.parse(JSON.stringify(RegisterOnClickChangePhoneNumberFlowOnClickChangePhoneNumber)))
  register('Register/OnClickChangePhoneNumber/FLOW_CODE_ON_CLICK_CHANGE_PHONE_NUMBER', RegisterOnClickChangePhoneNumberFlowCodeOnClickChangePhoneNumber);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_VERIFY', JSON.parse(JSON.stringify(RegisterOnClickVerifyFlowOnClickVerify)))
  register('Register/OnClickVerify/FLOW_CODE_ON_CLICK_VERIFY', RegisterOnClickVerifyFlowCodeOnClickVerify);
  load('@com.horsecoder.platform.mall.umi.chat/register/FLOW_ON_CLICK_JUMP_LOGIN_PAGE', JSON.parse(JSON.stringify(RegisterOnClickJumpLoginPageFlowOnClickJumpLoginPage)))
  register('Register/OnClickJumpLoginPage/FLOW_CODE_ON_CLICK_JUMP_LOGIN_PAGE', RegisterOnClickJumpLoginPageFlowCodeOnClickJumpLoginPage);
  load('@com.horsecoder.platform.mall.umi.chat/weChatLogin/FLOW_ON_CLICK_RETURN_ACCOUNT_LOGIN', JSON.parse(JSON.stringify(WeChatLoginOnClickReturnAccountLoginFlowOnClickReturnAccountLogin)))
  register('WeChatLogin/OnClickReturnAccountLogin/FLOW_CODE_ON_CLICK_RETURN_ACCOUNT_LOGIN', WeChatLoginOnClickReturnAccountLoginFlowCodeOnClickReturnAccountLogin);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_GOOGLE_LOGIN_PANEL', JSON.parse(JSON.stringify(LogInOnClickOpenGoogleLoginPanelFlowOnClickOpenGoogleLoginPanel)))
  register('LogIn/OnClickOpenGoogleLoginPanel/FLOW_CODE_DISABLE_VISIBLE_CONTROL_IN_LOGIN_PANEL', LogInOnClickOpenGoogleLoginPanelFlowCodeDisableVisibleControlInLoginPanel);
  register('LogIn/OnClickOpenGoogleLoginPanel/FLOW_CODE_ENABLE_GOOGLE_LOGIN_PANEL_VISIBLE_CONTROLS', LogInOnClickOpenGoogleLoginPanelFlowCodeEnableGoogleLoginPanelVisibleControls);
  load('@com.horsecoder.platform.mall.umi.chat/logIn/FLOW_ON_CLICK_OPEN_WE_CHAT_LOGIN', JSON.parse(JSON.stringify(LogInOnClickOpenWeChatLoginFlowOnClickOpenWeChatLogin)))
  register('LogIn/OnClickOpenWeChatLogin/FLOW_CODE_DISABLE_VISIBLE_CONTROL_IN_LOGIN_PANEL', LogInOnClickOpenWeChatLoginFlowCodeDisableVisibleControlInLoginPanel);
  register('LogIn/OnClickOpenWeChatLogin/FLOW_CODE_ENABLE_WE_CHAT_LOGIN_PANEL_VISIBLE_CONTROL', LogInOnClickOpenWeChatLoginFlowCodeEnableWeChatLoginPanelVisibleControl);
  load('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CHAT_SUMMARY_MESSAGE_INITIALIZE_RESULT_DISPLAY', JSON.parse(JSON.stringify(QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowOnChatSummaryMessageInitializeResultDisplay)))
  register('QueryResultDisplayComponent/OnChatSummaryMessageInitializeResultDisplay/FLOW_CODE_INITIALIZE_RESULT_DISPLAY_WITH_INPUT_PARAMETERS', QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeInitializeResultDisplayWithInputParameters);
  register('QueryResultDisplayComponent/OnChatSummaryMessageInitializeResultDisplay/FLOW_CODE_THE_CONVERSION_RESULT_DISPLAYS_PARAMETERS', QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeTheConversionResultDisplaysParameters);
  register('QueryResultDisplayComponent/OnChatSummaryMessageInitializeResultDisplay/FLOW_CODE_SET_SUMMARIZE_CONTENT', QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetSummarizeContent);
  register('QueryResultDisplayComponent/OnChatSummaryMessageInitializeResultDisplay/FLOW_CODE_SET_FILE_URL', QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetFileUrl);
  register('QueryResultDisplayComponent/OnChatSummaryMessageInitializeResultDisplay/FLOW_CODE_SET_ITEMS', QueryResultDisplayComponentOnChatSummaryMessageInitializeResultDisplayFlowCodeSetItems);
  load('@com.horsecoder.platform.mall.umi.chat/summaryOfAttachmentsForSendingInformationItems/FLOW_ON_GENERATE_A_CONTENT_SUMMARY_BASED_ON_FILE', JSON.parse(JSON.stringify(SummaryOfAttachmentsForSendingInformationItemsOnGenerateAContentSummaryBasedOnFileFlowOnGenerateAContentSummaryBasedOnFile)))
  register('SummaryOfAttachmentsForSendingInformationItems/OnGenerateAContentSummaryBasedOnFile/FLOW_CODE_SET_SUMMARY_CONTENT', SummaryOfAttachmentsForSendingInformationItemsOnGenerateAContentSummaryBasedOnFileFlowCodeSetSummaryContent);
  load('@com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY', JSON.parse(JSON.stringify(SendMessageFileCardOnClickExpandDataSummaryFlowOnClickExpandDataSummary)))
  register('SendMessageFileCard/OnClickExpandDataSummary/FLOW_CODE_ON_CLICK_EXPAND_DATA_SUMMARY', SendMessageFileCardOnClickExpandDataSummaryFlowCodeOnClickExpandDataSummary);
  load('@com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL', JSON.parse(JSON.stringify(ReplyIndividualComponentOnClickSwitchQueryResultsAndSeeControlFlowOnClickSwitchQueryResultsAndSeeControl)))
  register('ReplyIndividualComponent/OnClickSwitchQueryResultsAndSeeControl/FLOW_CODE_ON_CLICK_SWITCH_QUERY_RESULTS_AND_SEE_CONTROL', ReplyIndividualComponentOnClickSwitchQueryResultsAndSeeControlFlowCodeOnClickSwitchQueryResultsAndSeeControl);
  load('@com.horsecoder.platform.mall.umi.chat/queryResultDataTable/FLOW_ON_INITIALIZE_TABLE_DATA', JSON.parse(JSON.stringify(QueryResultDataTableOnInitializeTableDataFlowOnInitializeTableData)))
  register('QueryResultDataTable/OnInitializeTableData/FLOW_CODE_ON_INITIALIZE_TABLE_DATA', QueryResultDataTableOnInitializeTableDataFlowCodeOnInitializeTableData);
  load('@com.horsecoder.platform.mall.umi.chat/sendMessageFileCard/FLOW_ON_MONITOR_DATA_CHANGES_ANIMATION', JSON.parse(JSON.stringify(SendMessageFileCardOnMonitorDataChangesAnimationFlowOnMonitorDataChangesAnimation)))
  register('SendMessageFileCard/OnMonitorDataChangesAnimation/FLOW_CODE_ON_MONITOR_DATA_CHANGES_ANIMATION', SendMessageFileCardOnMonitorDataChangesAnimationFlowCodeOnMonitorDataChangesAnimation);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_NEW_CONVERSATION', JSON.parse(JSON.stringify(LeftComponentOnNewConversationFlowOnNewConversation)))
  register('LeftComponent/OnNewConversation/FLOW_CODE_PREPARE_CREATE_SESSION_PARAMETERS', LeftComponentOnNewConversationFlowCodePrepareCreateSessionParameters);
  register('LeftComponent/OnNewConversation/FLOW_CODE_SET_SESSION_U_R_L_AND_DATA', LeftComponentOnNewConversationFlowCodeSetSessionURLAndData);
  load('@com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_MONITOR_DATA_CHANGES_ANIMATION', JSON.parse(JSON.stringify(SendSingleAttachmentInformationOnMonitorDataChangesAnimationFlowOnMonitorDataChangesAnimation)))
  register('SendSingleAttachmentInformation/OnMonitorDataChangesAnimation/FLOW_CODE_ON_MONITOR_DATA_CHANGES_ANIMATION', SendSingleAttachmentInformationOnMonitorDataChangesAnimationFlowCodeOnMonitorDataChangesAnimation);
  load('@com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_EXPAND_DATA_SUMMARY', JSON.parse(JSON.stringify(SendSingleAttachmentInformationOnClickExpandDataSummaryFlowOnClickExpandDataSummary)))
  register('SendSingleAttachmentInformation/OnClickExpandDataSummary/FLOW_CODE_ON_CLICK_EXPAND_DATA_SUMMARY', SendSingleAttachmentInformationOnClickExpandDataSummaryFlowCodeOnClickExpandDataSummary);
  load('@com.horsecoder.platform.mall.umi.chat/sendSingleAttachmentInformation/FLOW_ON_CLICK_ON_FILE_CARD_COMPONENT_OPEN_AND_CLOSE_SUMMARY', JSON.parse(JSON.stringify(SendSingleAttachmentInformationOnClickOnFileCardComponentOpenAndCloseSummaryFlowOnClickOnFileCardComponentOpenAndCloseSummary)))
  register('SendSingleAttachmentInformation/OnClickOnFileCardComponentOpenAndCloseSummary/FLOW_CODE_ON_CLICK_ON_FILE_CARD_COMPONENT_OPEN_AND_CLOSE_SUMMARY', SendSingleAttachmentInformationOnClickOnFileCardComponentOpenAndCloseSummaryFlowCodeOnClickOnFileCardComponentOpenAndCloseSummary);
  load('@com.horsecoder.platform.mall.umi.chat/promptWordsBasedOnQueryResults/FLOW_ON_INITIALIZE_PROMPT_WORD_SET', JSON.parse(JSON.stringify(PromptWordsBasedOnQueryResultsOnInitializePromptWordSetFlowOnInitializePromptWordSet)))
  register('PromptWordsBasedOnQueryResults/OnInitializePromptWordSet/FLOW_CODE_ON_INITIALIZE_PROMPT_WORD_SET', PromptWordsBasedOnQueryResultsOnInitializePromptWordSetFlowCodeOnInitializePromptWordSet);
  load('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_CHART', JSON.parse(JSON.stringify(QueryResultDisplayComponentOnClickOpenAndCloseChartFlowOnClickOpenAndCloseChart)))
  register('QueryResultDisplayComponent/OnClickOpenAndCloseChart/FLOW_CODE_ENABLE_VISIBLE_CONTROL_OF_CHART_COMPONENT', QueryResultDisplayComponentOnClickOpenAndCloseChartFlowCodeEnableVisibleControlOfChartComponent);
  load('@com.horsecoder.platform.mall.umi.chat/visualizationChart/FLOW_ON_INITIALIZE_CHART_DATA', JSON.parse(JSON.stringify(VisualizationChartOnInitializeChartDataFlowOnInitializeChartData)))
  register('VisualizationChart/OnInitializeChartData/FLOW_CODE_ON_INITIALIZE_CHART_DATA', VisualizationChartOnInitializeChartDataFlowCodeOnInitializeChartData);
  load('@com.horsecoder.platform.mall.umi.chat/panel/FLOW_ON_MONITOR_U_R_L', JSON.parse(JSON.stringify(PanelOnMonitorURLFlowOnMonitorURL)))
  register('Panel/OnMonitorURL/FLOW_CODE_ON_MONITOR_U_R_L', PanelOnMonitorURLFlowCodeOnMonitorURL);
  load('@com.horsecoder.platform.mall.umi.chat/queryResultDisplayComponent/FLOW_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT', JSON.parse(JSON.stringify(QueryResultDisplayComponentOnClickOpenAndCloseSQLComponentFlowOnClickOpenAndCloseSQLComponent)))
  register('QueryResultDisplayComponent/OnClickOpenAndCloseSQLComponent/FLOW_CODE_ON_CLICK_OPEN_AND_CLOSE_S_Q_L_COMPONENT', QueryResultDisplayComponentOnClickOpenAndCloseSQLComponentFlowCodeOnClickOpenAndCloseSQLComponent);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_INITIALIZE_FILE_AND_SCHEMA_LIST', JSON.parse(JSON.stringify(DialogueOnInitializeFileAndSchemaListFlowOnInitializeFileAndSchemaList)))
  register('Dialogue/OnInitializeFileAndSchemaList/FLOW_CODE_INITIALIZE_FILE_AND_SCHEMA_LIST_PARAMETERS', DialogueOnInitializeFileAndSchemaListFlowCodeInitializeFileAndSchemaListParameters);
  register('Dialogue/OnInitializeFileAndSchemaList/FLOW_CODE_CONVERT_DIALOGUE_DATA_PATTERNS_AND_FILES', DialogueOnInitializeFileAndSchemaListFlowCodeConvertDialogueDataPatternsAndFiles);
  register('Dialogue/OnInitializeFileAndSchemaList/FLOW_CODE_DISPATCH_DIALOGUE_DATA_SCHEMA_LIST', DialogueOnInitializeFileAndSchemaListFlowCodeDispatchDialogueDataSchemaList);
  load('@com.horsecoder.platform.mall.umi.chat/threePointComponent/FLOW_ON_SELECT_DATA_SCHEMA_PREVIEW', JSON.parse(JSON.stringify(ThreePointComponentOnSelectDataSchemaPreviewFlowOnSelectDataSchemaPreview)))
  register('ThreePointComponent/OnSelectDataSchemaPreview/FLOW_CODE_DISPATCH_PREVIEW_URL_OF_SELECTED_SCHEMA', ThreePointComponentOnSelectDataSchemaPreviewFlowCodeDispatchPreviewUrlOfSelectedSchema);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_EXPAND_SIDEBAR', JSON.parse(JSON.stringify(LeftComponentOnClickExpandSidebarFlowOnClickExpandSidebar)))
  register('LeftComponent/OnClickExpandSidebar/FLOW_CODE_ON_CLICK_EXPAND_SIDEBAR', LeftComponentOnClickExpandSidebarFlowCodeOnClickExpandSidebar);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_AUTOMATICALLY_CREATE_A_SESSION_UPON_FIRST_LOGIN', JSON.parse(JSON.stringify(LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowOnAutomaticallyCreateASessionUponFirstLogin)))
  register('LeftComponent/OnAutomaticallyCreateASessionUponFirstLogin/FLOW_CODE_PREPARE_CREATE_SESSION_PARAMETERS', LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowCodePrepareCreateSessionParameters);
  register('LeftComponent/OnAutomaticallyCreateASessionUponFirstLogin/FLOW_CODE_SET_GLOBAL_SESSION_AND_U_R_L', LeftComponentOnAutomaticallyCreateASessionUponFirstLoginFlowCodeSetGlobalSessionAndURL);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_CLICK_COLLAPSE_LEFT_SIDEBAR', JSON.parse(JSON.stringify(LeftComponentOnClickCollapseLeftSidebarFlowOnClickCollapseLeftSidebar)))
  register('LeftComponent/OnClickCollapseLeftSidebar/FLOW_CODE_ON_CLICK_COLLAPSE_LEFT_SIDEBAR', LeftComponentOnClickCollapseLeftSidebarFlowCodeOnClickCollapseLeftSidebar);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_CLICK_OPEN_AND_CLOSE_GROUP_CHAT_SETTINGS', JSON.parse(JSON.stringify(DialogueOnClickOpenAndCloseGroupChatSettingsFlowOnClickOpenAndCloseGroupChatSettings)))
  register('Dialogue/OnClickOpenAndCloseGroupChatSettings/FLOW_CODE_SET_GROUP_CHAT_SETTINGS_DRAWER_VISIBLE', DialogueOnClickOpenAndCloseGroupChatSettingsFlowCodeSetGroupChatSettingsDrawerVisible);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId)))
  register('Dialogue/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId);
  register('Dialogue/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_SET_SENDER_ID_LIST', DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderIdList);
  register('Dialogue/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_NODE_SET_SENDER_NICKNAME_DICTIONARY', DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowNodeSetSenderNicknameDictionary);
  register('Dialogue/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_SET_CHAT_CONVERSATION_LIST_CONTROL', DialogueOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetChatConversationListControl);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', JSON.parse(JSON.stringify(LeftComponentOnInitializeUserDialogueCardListFlowOnInitializeUserDialogueCardList)))
  register('LeftComponent/OnInitializeUserDialogueCardList/FLOW_NODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', LeftComponentOnInitializeUserDialogueCardListFlowNodeOnInitializeUserDialogueCardList);
  register('LeftComponent/OnInitializeUserDialogueCardList/FLOW_NODE_CONVERT_DIALOGUE_CARD_LIST', LeftComponentOnInitializeUserDialogueCardListFlowNodeConvertDialogueCardList);
  register('LeftComponent/OnInitializeUserDialogueCardList/FLOW_CODE_SET_DIALOGUE_CARD_LIST', LeftComponentOnInitializeUserDialogueCardListFlowCodeSetDialogueCardList);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_UPDATE_NEW_MESSAGE_ENTITY', JSON.parse(JSON.stringify(DialogueOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity)))
  register('Dialogue/OnUpdateNewMessageEntity/FLOW_CODE_ON_UPDATE_NEW_MESSAGE_ENTITY', DialogueOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_SUBMIT_TASK', JSON.parse(JSON.stringify(DialogueOnSubmitTaskFlowOnSubmitTask)))
  register('Dialogue/OnSubmitTask/FLOW_NODE_SUBMIT_TASK_PREPARATION_PARAMETERS', DialogueOnSubmitTaskFlowNodeSubmitTaskPreparationParameters);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(DialogueOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId)))
  register('Dialogue/OnDetermineWhetherConversationCompletedBasedOnConversationId/FLOW_CODE_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', DialogueOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId);
  load('@com.horsecoder.platform.mall.umi.chat/dialogue/FLOW_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', JSON.parse(JSON.stringify(DialogueOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList)))
  register('Dialogue/OnUpdateNicknameDictionaryBasedOnSenderIdList/FLOW_CODE_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', DialogueOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList);
  load('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_SUBMIT_TASK', JSON.parse(JSON.stringify(RightComponentOnSubmitTaskFlowOnSubmitTask)))
  register('RightComponent/OnSubmitTask/FLOW_CODE_ON_SUBMIT_TASK', RightComponentOnSubmitTaskFlowCodeOnSubmitTask);
  load('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(RightComponentOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId)))
  register('RightComponent/OnDetermineWhetherConversationCompletedBasedOnConversationId/FLOW_CODE_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', RightComponentOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId);
  load('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_UPDATE_NEW_MESSAGE_ENTITY', JSON.parse(JSON.stringify(RightComponentOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity)))
  register('RightComponent/OnUpdateNewMessageEntity/FLOW_CODE_ON_UPDATE_NEW_MESSAGE_ENTITY', RightComponentOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity);
  load('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', JSON.parse(JSON.stringify(RightComponentOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList)))
  register('RightComponent/OnUpdateNicknameDictionaryBasedOnSenderIdList/FLOW_CODE_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', RightComponentOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList);
  load('@com.horsecoder.platform.mall.umi.chat/rightComponent/FLOW_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(RightComponentOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId)))
  register('RightComponent/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', RightComponentOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId);
  load('@com.horsecoder.platform.mall.umi.chat/leftComponent/FLOW_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION', JSON.parse(JSON.stringify(LeftComponentOnDetermineWhetherItAnAddConversationFlowOnDetermineWhetherItAnAddConversation)))
  register('LeftComponent/OnDetermineWhetherItAnAddConversation/FLOW_CODE_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION', LeftComponentOnDetermineWhetherItAnAddConversationFlowCodeOnDetermineWhetherItAnAddConversation);
  load('@com.horsecoder.platform.mall.umi.chat/testPage/FLOW_ON_INITIALIZE_A_G_G_R_ID', JSON.parse(JSON.stringify(TestPageOnInitializeAGGRIdFlowOnInitializeAGGRId)))
  register('TestPage/OnInitializeAGGRId/FLOW_CODE_ON_INITIALIZE_A_G_G_R_ID', TestPageOnInitializeAGGRIdFlowCodeOnInitializeAGGRId);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_SUBMIT_TASK', JSON.parse(JSON.stringify(MainOnSubmitTaskFlowOnSubmitTask)))
  register('Main/OnSubmitTask/FLOW_CODE_SUBMIT_TASK_PREPARATION_PARAMETERS', MainOnSubmitTaskFlowCodeSubmitTaskPreparationParameters);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowOnRetrieveHistoricalChatRecordsBasedOnConversationId)))
  register('Main/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_ON_RETRIEVE_HISTORICAL_CHAT_RECORDS_BASED_ON_CONVERSATION_ID', MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeOnRetrieveHistoricalChatRecordsBasedOnConversationId);
  register('Main/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_SET_SENDER_ID_LIST', MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderIdList);
  register('Main/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_SET_SENDER_NICKNAME_DICTIONARY', MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetSenderNicknameDictionary);
  register('Main/OnRetrieveHistoricalChatRecordsBasedOnConversationId/FLOW_CODE_SET_CHAT_CONVERSATION_LIST_CONTROL', MainOnRetrieveHistoricalChatRecordsBasedOnConversationIdFlowCodeSetChatConversationListControl);
  load('@com.horsecoder.platform.mall.umi.chat/inputBox/FLOW_ON_CLICK_SEND_USER_MESSAGE', JSON.parse(JSON.stringify(InputBoxOnClickSendUserMessageFlowOnClickSendUserMessage)))
  register('InputBox/OnClickSendUserMessage/FLOW_CODE_PREPARE_DATA_QUERY_PARAMETERS', InputBoxOnClickSendUserMessageFlowCodePrepareDataQueryParameters);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', JSON.parse(JSON.stringify(MainOnInitializeUserDialogueCardListFlowOnInitializeUserDialogueCardList)))
  register('Main/OnInitializeUserDialogueCardList/FLOW_CODE_ON_INITIALIZE_USER_DIALOGUE_CARD_LIST', MainOnInitializeUserDialogueCardListFlowCodeOnInitializeUserDialogueCardList);
  register('Main/OnInitializeUserDialogueCardList/FLOW_CODE_CONVERT_DIALOGUE_CARD_LIST', MainOnInitializeUserDialogueCardListFlowCodeConvertDialogueCardList);
  register('Main/OnInitializeUserDialogueCardList/FLOW_CODE_SET_DIALOGUE_CARD_LIST', MainOnInitializeUserDialogueCardListFlowCodeSetDialogueCardList);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION', JSON.parse(JSON.stringify(MainOnDetermineWhetherItAnAddConversationFlowOnDetermineWhetherItAnAddConversation)))
  register('Main/OnDetermineWhetherItAnAddConversation/FLOW_CODE_ON_DETERMINE_WHETHER_IT_AN_ADD_CONVERSATION', MainOnDetermineWhetherItAnAddConversationFlowCodeOnDetermineWhetherItAnAddConversation);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_UPDATE_NEW_MESSAGE_ENTITY', JSON.parse(JSON.stringify(MainOnUpdateNewMessageEntityFlowOnUpdateNewMessageEntity)))
  register('Main/OnUpdateNewMessageEntity/FLOW_CODE_ON_UPDATE_NEW_MESSAGE_ENTITY', MainOnUpdateNewMessageEntityFlowCodeOnUpdateNewMessageEntity);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', JSON.parse(JSON.stringify(MainOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowOnDetermineWhetherConversationCompletedBasedOnConversationId)))
  register('Main/OnDetermineWhetherConversationCompletedBasedOnConversationId/FLOW_CODE_ON_DETERMINE_WHETHER_CONVERSATION_COMPLETED_BASED_ON_CONVERSATION_ID', MainOnDetermineWhetherConversationCompletedBasedOnConversationIdFlowCodeOnDetermineWhetherConversationCompletedBasedOnConversationId);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', JSON.parse(JSON.stringify(MainOnUpdateNicknameDictionaryBasedOnSenderIdListFlowOnUpdateNicknameDictionaryBasedOnSenderIdList)))
  register('Main/OnUpdateNicknameDictionaryBasedOnSenderIdList/FLOW_CODE_ON_UPDATE_NICKNAME_DICTIONARY_BASED_ON_SENDER_ID_LIST', MainOnUpdateNicknameDictionaryBasedOnSenderIdListFlowCodeOnUpdateNicknameDictionaryBasedOnSenderIdList);
  load('@com.horsecoder.platform.mall.umi.chat/replyIndividualComponent/FLOW_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE', JSON.parse(JSON.stringify(ReplyIndividualComponentOnObtainContentOfReplyMessageFlowOnObtainContentOfReplyMessage)))
  register('ReplyIndividualComponent/OnObtainContentOfReplyMessage/FLOW_CODE_ON_OBTAIN_CONTENT_OF_REPLY_MESSAGE', ReplyIndividualComponentOnObtainContentOfReplyMessageFlowCodeOnObtainContentOfReplyMessage);
  load('@com.horsecoder.platform.mall.umi.chat/sendASingleMessage/FLOW_ON_RETRIEVE_MESSAGE_CONTENT', JSON.parse(JSON.stringify(SendASingleMessageOnRetrieveMessageContentFlowOnRetrieveMessageContent)))
  register('SendASingleMessage/OnRetrieveMessageContent/FLOW_CODE_ON_RETRIEVE_MESSAGE_CONTENT', SendASingleMessageOnRetrieveMessageContentFlowCodeOnRetrieveMessageContent);
  load('@com.horsecoder.platform.mall.umi.chat/qASingleComponent/FLOW_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES', JSON.parse(JSON.stringify(QASingleComponentOnVisibleControlForSendingOrReplyingChatMessagesFlowOnVisibleControlForSendingOrReplyingChatMessages)))
  register('QASingleComponent/OnVisibleControlForSendingOrReplyingChatMessages/FLOW_CODE_ON_VISIBLE_CONTROL_FOR_SENDING_OR_REPLYING_CHAT_MESSAGES', QASingleComponentOnVisibleControlForSendingOrReplyingChatMessagesFlowCodeOnVisibleControlForSendingOrReplyingChatMessages);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_COLLAPSE_LEFT_SIDEBAR', JSON.parse(JSON.stringify(MainOnClickCollapseLeftSidebarFlowOnClickCollapseLeftSidebar)))
  register('Main/OnClickCollapseLeftSidebar/FLOW_CODE_DISABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR', MainOnClickCollapseLeftSidebarFlowCodeDisableExpandVisibleControlsOnLeftSidebar);
  register('Main/OnClickCollapseLeftSidebar/FLOW_CODE_ENABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR', MainOnClickCollapseLeftSidebarFlowCodeEnableFoldingUpVisibleControlsOnLeftSidebar);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_EXPAND_SIDEBAR', JSON.parse(JSON.stringify(MainOnClickExpandSidebarFlowOnClickExpandSidebar)))
  register('Main/OnClickExpandSidebar/FLOW_CODE_DISABLE_FOLDING_UP_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR', MainOnClickExpandSidebarFlowCodeDisableFoldingUpVisibleControlsOnLeftSidebar);
  register('Main/OnClickExpandSidebar/FLOW_CODE_ENABLE_EXPAND_VISIBLE_CONTROLS_ON_LEFT_SIDEBAR', MainOnClickExpandSidebarFlowCodeEnableExpandVisibleControlsOnLeftSidebar);
  load('@com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_FEEDBACK_AND_REPORT_DIALOGUE_CANCEL', JSON.parse(JSON.stringify(InformationOperationComponentOnFeedbackAndReportDialogueCancelFlowOnFeedbackAndReportDialogueCancel)))
  register('InformationOperationComponent/OnFeedbackAndReportDialogueCancel/FLOW_CODE_CLOSE_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE', InformationOperationComponentOnFeedbackAndReportDialogueCancelFlowCodeCloseFeedbackAndReportDialogueVisible);
  load('@com.horsecoder.platform.mall.umi.chat/informationOperationComponent/FLOW_ON_OPEN_FEEDBACK_AND_REPORT_DIALOGUE', JSON.parse(JSON.stringify(InformationOperationComponentOnOpenFeedbackAndReportDialogueFlowOnOpenFeedbackAndReportDialogue)))
  register('InformationOperationComponent/OnOpenFeedbackAndReportDialogue/FLOW_CODE_OPEN_FEEDBACK_AND_REPORT_DIALOGUE_VISIBLE', InformationOperationComponentOnOpenFeedbackAndReportDialogueFlowCodeOpenFeedbackAndReportDialogueVisible);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_MONITOR_VISIBLE_CONTROL_CHANGES', JSON.parse(JSON.stringify(MainOnMonitorVisibleControlChangesFlowOnMonitorVisibleControlChanges)))
  register('Main/OnMonitorVisibleControlChanges/FLOW_CODE_ON_MONITOR_VISIBLE_CONTROL_CHANGES', MainOnMonitorVisibleControlChangesFlowCodeOnMonitorVisibleControlChanges);
  load('@com.horsecoder.platform.mall.umi.chat/main/FLOW_ON_CLICK_ON_ADD_DIALOGUE_ITEM', JSON.parse(JSON.stringify(MainOnClickOnAddDialogueItemFlowOnClickOnAddDialogueItem)))
  register('Main/OnClickOnAddDialogueItem/FLOW_CODE_ON_CLICK_ON_ADD_DIALOGUE_ITEM', MainOnClickOnAddDialogueItemFlowCodeOnClickOnAddDialogueItem);
}
